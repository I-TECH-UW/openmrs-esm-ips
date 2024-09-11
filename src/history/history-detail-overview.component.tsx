import React from 'react';
import AllergiesTemplate from '../templates/allergies-template.component ';
import ConditionsTemplate from '../templates/conditions-template.component';
import * as Constants from '../constants/constants';
import { EmptyState } from '@openmrs/esm-patient-common-lib';
import ImmunizationsTemplate from '../templates/immunization.component';
import { InlineLoading, Tabs, TabPanel, TabPanels } from '@carbon/react';
import { ErrorState, usePatient } from '@openmrs/esm-framework';
import ObservationTemplate from '../templates/observation-template.component';
import { useTranslation } from 'react-i18next';
import useIpsResource from '../common/history.resource';
import styles from './history-detail-overview.scss';
import MedicationsTemplate from '../templates/medication-template.component ';

interface HistoryDetailOverviewProps {
  patientUuid: string;
}

const HistoryDetailOverview: React.FC<HistoryDetailOverviewProps> = () => {
  const { t } = useTranslation();
  const { patientUuid: uuid } = usePatient();
  const { summaries, error, isLoading } = useIpsResource(uuid);

  //Add a resource to this array and write its template to have it displayed
  const resources: string[] = [
    Constants.ALLERGY_INTOLERANCE,
    Constants.CONDITION_RESOURCE,
    Constants.IMMUNIZATION_RESOURCE,
    Constants.MEDICATION_RESOURCE,
    Constants.MEDICATION_STATEMENT_RESOURCE,
    Constants.OBSERVATION_RESOURCE,
  ];

  return (
    <div className={styles.tabs}>
      <Tabs>
        <TabPanels>
          <TabPanel>
            {isLoading ? (
              <InlineLoading description={`${t('loading', 'Loading')} ...`} role="progressbar" />
            ) : error ? (
              <ErrorState headerTitle={t('history', 'Patient History')} error={error} />
            ) : summaries.entry ? (
              <>
                {summaries.entry
                  .filter((summary: { resource: { resourceType: string } }) =>
                    resources.includes(summary?.resource?.resourceType),
                  )
                  .map((summary, index) => (
                    <div className={styles.container} key={index}>
                      {(() => {
                        switch (summary.resource.resourceType) {
                          case Constants.ALLERGY_INTOLERANCE:
                            return <AllergiesTemplate resource={summary.resource} />;
                          case Constants.CONDITION_RESOURCE:
                            return <ConditionsTemplate resource={summary.resource} />;
                          case Constants.IMMUNIZATION_RESOURCE:
                            return <ImmunizationsTemplate resource={summary.resource} />;
                          case Constants.MEDICATION_RESOURCE:
                          case Constants.MEDICATION_STATEMENT_RESOURCE:
                            return <MedicationsTemplate resource={summary.resource} />;
                          case Constants.OBSERVATION_RESOURCE:
                            return <ObservationTemplate resource={summary.resource} />;
                          default:
                            return <p>{summary?.resource?.resourceType}</p>;
                        }
                      })()}
                    </div>
                  ))}
              </>
            ) : (
              <EmptyState headerTitle={t('history', 'Patient History')} displayText={t('history', 'Patient History')} />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default HistoryDetailOverview;
