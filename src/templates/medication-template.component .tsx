import React from 'react';
import * as Constants from '../constants/constants';
import { type InternationalPatientSummary } from '../types';
import {
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
} from '@carbon/react';
import styles from '../history/history-detail-overview.scss';

const MedicationsTemplate = (entry: InternationalPatientSummary) => {
  function renderMedications(): React.ReactNode {
    if (entry?.resource?.resourceType == Constants.MEDICATION_RESOURCE) {
      return (
        <>
          <Medications resource={entry?.resource} />
        </>
      );
    } else {
      return (
        <>
          <MedicationStatements resource={entry?.resource} />
        </>
      );
    }
  }
  return <div>{renderMedications()}</div>;
};

const Medications = (entry: InternationalPatientSummary) => {
  const medications = entry?.resource?.code?.coding;
  if (medications) {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.historyInfo}>
            <h5 className={styles.resourceType}>{entry?.resource?.resourceType}</h5>
          </div>
        </div>
        <div className={styles.container}>
          {medications?.map((medication) => {
            return (
              <>
                <h6 className={styles.resourceType}>{medication?.display}</h6>
              </>
            );
          })}
        </div>
      </div>
    );
  }
};

const MedicationStatements = (entry: InternationalPatientSummary) => {
  const displayRouteText = entry?.resource?.dosage
    ?.flatMap((property) => property.route)
    .flatMap((property) => property.coding)
    .flatMap((property) => property.display);
  const displayQtyText = entry?.resource?.dosage
    ?.flatMap((property) => property.doseAndRate)
    .flatMap((property) => property?.doseQuantity.value);
  const displayUnitText = entry?.resource?.dosage
    ?.flatMap((property) => property.doseAndRate)
    .flatMap((property) => property?.doseQuantity.unit);
  const displayFreqQtyText = entry?.resource?.dosage
    ?.flatMap((property) => property.timing)
    .flatMap((property) => property?.repeat?.count);
  const displayFreqPeriodText = entry?.resource?.dosage
    ?.flatMap((property) => property.timing)
    .flatMap((property) => property?.repeat?.count);

  return (
    <div>
      <h5 className={styles.resourceType}>{entry?.resource?.resourceType}</h5>
      <div className={styles.container}>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>Route</StructuredListCell>
              <StructuredListCell head>Qty</StructuredListCell>
              <StructuredListCell head>Unit</StructuredListCell>
              <StructuredListCell head>Freq. Qty</StructuredListCell>
              <StructuredListCell head>Freq. Period</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>{displayRouteText ? displayRouteText : '--'}</StructuredListCell>
              <StructuredListCell>{displayQtyText ? displayQtyText : '--'}</StructuredListCell>
              <StructuredListCell>{displayUnitText ? displayUnitText : '--'}</StructuredListCell>
              <StructuredListCell>{displayFreqQtyText ? displayFreqQtyText : '--'}</StructuredListCell>
              <StructuredListCell>{displayFreqPeriodText ? displayFreqPeriodText : '--'}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </div>
  );
};

export default MedicationsTemplate;
