import React, { useEffect, useState } from 'react';
import AllergiesTemplate from '../templates/allergies-template.component ';
import { Button } from '@carbon/react';
import ConditionsTemplate from '../templates/conditions-template.component';
import * as Constants from '../constants/constants';
import { EmptyState } from '@openmrs/esm-patient-common-lib';
import { ErrorState, showSnackbar, usePatient } from '@openmrs/esm-framework';
import ImmunizationsTemplate from '../templates/immunization-template.component';
import { InlineLoading, Tabs, TabPanel, TabPanels } from '@carbon/react';
import MedicationsTemplate from '../templates/medication-template.component ';
import ObservationTemplate from '../templates/observation-template.component';
import { Renew } from '@carbon/react/icons';
import styles from './history-detail-overview.scss';
import { useTranslation } from 'react-i18next';
import { useIpsResource, createIpsResource } from '../common/history.resource';
import { Tile } from '@carbon/react';

interface HistoryDetailOverviewProps {
  patientUuid: string;
}

//Add a resource to this array and write its template to have it displayed
const resources: string[] = [
  Constants.ALLERGY_INTOLERANCE,
  Constants.CONDITION_RESOURCE,
  Constants.IMMUNIZATION_RESOURCE,
  Constants.MEDICATION_RESOURCE,
  Constants.MEDICATION_STATEMENT_RESOURCE,
  Constants.OBSERVATION_RESOURCE,
];

const HistoryDetailOverview: React.FC<HistoryDetailOverviewProps> = () => {
  const { t } = useTranslation();
  const abortController = new AbortController();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { patientUuid: uuid } = usePatient();
  const { history, error, isLoading } = useIpsResource(uuid);

  const [ips, setIps] = useState({
    history: null,
    isLoading: true,
    error: '',
  });

  useEffect(() => {
    if (history != null) {
      setIps((ps) => ({ ...ps, history: history, isLoading: isLoading, error: error?.message }));
    }
  }, [error, history, isLoading]);

  const handleSubmit = () => {
    setIsSubmitting(true);
    createIpsResource(uuid, abortController)
      .then((response) => {
        if (response.status === 200) {
          setIps((ps) => ({ ...ps, history: history, isLoading: isLoading, error: error?.message }));
          setIsSubmitting(false);
          showSnackbar({
            isLowContrast: true,
            kind: 'success',
            title: t('ipsCreated', 'IPS'),
            subtitle: t('ipsNowAvailable', 'The IPS has been updated and is now visible in the Patient History.'),
          });
        }
      })
      .catch((err) => {
        setIps((ps) => ({ ...ps, history: null, isLoading: false, error: err?.message || 'Failed to fetch IPS' }));
        setIsSubmitting(false);
        showSnackbar({
          title: t('ipsCreationError', 'IPS'),
          kind: 'error',
          isLowContrast: false,
          subtitle: t(
            'checkForServerAvailability',
            'The Fhir server maybe unreachable or the IPS generation process exited with an error!',
          ),
        });
      })
      .finally(() => {
        abortController.abort();
      });
  };

  return (
    <div className={styles.tabs}>
      <Tabs>
        <TabPanels>
          <TabPanel>
            {isLoading ? (
              <InlineLoading description={`${t('loading', 'Loading')} ...`} role="progressbar" />
            ) : error ? (
              <ErrorState headerTitle={t('patientHistory', 'Patient History')} error={error} />
            ) : ips?.history?.data?.entry ? (
              <Tile className={styles.tile}>
                <Button
                  className={styles.button}
                  kind="ghost"
                  renderIcon={Renew}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {t('refresh', 'Refresh')}
                </Button>
                {ips?.history?.data?.entry
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
              </Tile>
            ) : (
              <Tile className={styles.tile}>
                <Button
                  className={styles.button}
                  kind="ghost"
                  renderIcon={Renew}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {t('refresh', 'Refresh')}
                </Button>
                <EmptyState
                  headerTitle={t('patientHistory', 'Patient History')}
                  displayText={t('patientHistory', 'Patient History')}
                />
              </Tile>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default HistoryDetailOverview;
