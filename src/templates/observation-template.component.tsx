import React from 'react';
import {
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
} from '@carbon/react';
import { type InternationalPatientSummary } from '../types';
import styles from '../history/history-detail-overview.scss';

const ObservationTemplate = (entry: InternationalPatientSummary) => {
  let categoryDisplayText: string | string[];

  if (typeof entry?.resource?.category == 'string') {
    categoryDisplayText = entry?.resource?.category;
  }

  categoryDisplayText = entry?.resource?.category[0]?.coding?.flatMap((property) => property.code);
  const valueCodeableDisplayText = entry?.resource?.valueCodeableConcept?.coding?.flatMap(
    (property) => property.display,
  );
  const nameDisplayText = entry?.resource?.code?.coding?.flatMap((property) => property.display);

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
              <StructuredListCell head>Date</StructuredListCell>
              <StructuredListCell head>Value</StructuredListCell>
              <StructuredListCell head>Category</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell noWrap={false}>{nameDisplayText ? nameDisplayText : '--'}</StructuredListCell>
              <StructuredListCell>{entry?.effectiveDateTime ? entry.effectiveDateTime : '--'}</StructuredListCell>
              <StructuredListCell noWrap={false}>
                {valueCodeableDisplayText ? valueCodeableDisplayText : '--'}
              </StructuredListCell>
              <StructuredListCell noWrap={false}>{categoryDisplayText ? categoryDisplayText : '--'}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </div>
  );
};

export default ObservationTemplate;
