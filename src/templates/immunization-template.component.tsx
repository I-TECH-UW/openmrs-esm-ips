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
import { useTranslation } from 'react-i18next';

const ImmunizationsTemplate = (entry: InternationalPatientSummary) => {
  const { t } = useTranslation();
  const status: string = entry?.resource?.status;
  const flaggedCompleted = status && status == Constants.COMPLETED_STATUS;
  const displayVaccineCode = entry?.resource?.vaccineCode?.coding?.flatMap((property) => property.code);
  const displayVaccineText = entry?.resource?.vaccineCode?.coding?.flatMap((property) => property.display);
  const displayRouteText = entry?.resource?.route?.coding?.flatMap((property) => property.display);

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
              <StructuredListCell head>{t('date', 'Date')}</StructuredListCell>
              <StructuredListCell head>{t('status', 'Status')}</StructuredListCell>
              <StructuredListCell head>{t('vaccine', 'Vaccine')}</StructuredListCell>
              <StructuredListCell head>{t('route', 'Route')}</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>
                {entry?.resource?.occurrenceDateTime ? entry.resource.occurrenceDateTime : '--'}
              </StructuredListCell>
              <StructuredListCell noWrap>
                <Tag type={flaggedCompleted ? Constants.COLOR_GREEN : Constants.COLOR_BLUE}>
                  <span className={styles.indicator}>{entry?.resource?.status ? entry.resource.status : '--'}</span>
                </Tag>
              </StructuredListCell>
              <StructuredListCell noWrap={false}>
                {displayVaccineText ? displayVaccineText : displayVaccineCode ? displayVaccineCode : '--'}
              </StructuredListCell>
              <StructuredListCell noWrap={false}>{displayRouteText ? displayRouteText : '--'}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </div>
  );
};

export default ImmunizationsTemplate;
