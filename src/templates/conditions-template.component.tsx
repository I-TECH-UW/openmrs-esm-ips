import React from 'react';
import * as Constants from '../constants/constants';
import { type InternationalPatientSummary } from '../types';
import {
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
  Tag,
} from '@carbon/react';
import styles from '../history/history-detail-overview.scss';

const ConditionsTemplate = (entry: InternationalPatientSummary) => {
  const displayConditionNameText = entry?.resource?.code?.coding?.flatMap((property) => property.display);
  const displaySeverityText = entry?.resource?.severity?.coding?.flatMap((property) => property.display);
  const displayClinicalStatusText = entry?.resource?.clinicalStatus?.coding?.flatMap((property) => property.code);
  const status: boolean = displayClinicalStatusText.includes('active');
  const severity: boolean = displaySeverityText.includes('Severe');
  const flaggedActive = status == true;
  const flaggedSevere = severity == true;

  let categoryDisplayText: string | string[];

  if (typeof entry?.resource?.category == 'string') {
    categoryDisplayText = entry?.resource?.category;
  }

  categoryDisplayText = entry?.resource?.category[0]?.coding?.flatMap((property) => property.display);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.historyInfo}>
          <h5 className={styles.resourceType}>{entry?.resource?.resourceType}</h5>
        </div>
      </div>
      <div className={styles.container}>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Name</StructuredListCell>
              <StructuredListCell head>Clinical Status</StructuredListCell>
              <StructuredListCell head>Severity</StructuredListCell>
              <StructuredListCell head>Category</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>{displayConditionNameText ? displayConditionNameText : '--'}</StructuredListCell>
              <StructuredListCell noWrap>
                <Tag type={flaggedActive ? Constants.COLOR_RED : Constants.COLOR_GREEN}>
                  <span className={styles.indicator}>
                    {displayClinicalStatusText ? displayClinicalStatusText : Constants.UNKNOWN_STATUS}
                  </span>
                </Tag>
              </StructuredListCell>
              <StructuredListCell noWrap={false}>
                <Tag type={flaggedSevere ? Constants.COLOR_RED : Constants.COLOR_BLUE}>
                  <span className={styles.indicator}>{displaySeverityText ? displaySeverityText : '--'}</span>
                </Tag>
              </StructuredListCell>
              <StructuredListCell>{categoryDisplayText ? categoryDisplayText : '--'}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </div>
  );
};

export default ConditionsTemplate;
