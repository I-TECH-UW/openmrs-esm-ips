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

const AllergiesTemplate = (entry: InternationalPatientSummary) => {
  const interpretation: string = entry?.resource?.criticality;
  const flaggedCritical = interpretation && interpretation == Constants.CRITICAL_INTERPRETATION;
  const flaggedAbnormal = interpretation && interpretation !== Constants.NORMAL_INTERPRETATION;
  const displayAllergyText = entry?.resource?.code?.coding?.flatMap((property) => property.display);

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
              <StructuredListCell head>Category</StructuredListCell>
              <StructuredListCell head>Criticality</StructuredListCell>
              <StructuredListCell head>Description</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>{entry?.resource?.category ? entry.resource.category : '--'}</StructuredListCell>
              <StructuredListCell noWrap>
                <Tag
                  type={
                    flaggedCritical
                      ? Constants.COLOR_RED
                      : flaggedAbnormal
                      ? Constants.COLOR_BLUE
                      : Constants.COLOR_GREEN
                  }
                >
                  <span className={styles.indicator}>
                    {entry?.resource?.criticality ? entry.resource.criticality : Constants.UNKNOWN_STATUS}
                  </span>
                </Tag>
              </StructuredListCell>
              <StructuredListCell noWrap={false}>{displayAllergyText ? displayAllergyText : '--'}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </div>
  );
};

export default AllergiesTemplate;
