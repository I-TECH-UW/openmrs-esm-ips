import { getSyncLifecycle } from '@openmrs/esm-framework';
import { createDashboardLink } from '@openmrs/esm-patient-common-lib';
import { dashboardMeta } from './dashboard.meta';
import patientHistoryComponent from './history/patient-history.component';
import patientHistoryPageComponent from './root.component';

const moduleName = '@openmrs/esm-ips-app';

const options = {
  featureName: 'patient-history',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export function startupApp() {}

export const root = getSyncLifecycle(patientHistoryPageComponent, { featureName: 'patient-history', moduleName });

export const patientHistoryDashboardLink =
  // t('Patient History', 'Patient History')
  getSyncLifecycle(
    createDashboardLink({
      ...dashboardMeta,
      moduleName,
    }),
    {
      featureName: 'history-dashboard',
      moduleName,
    },
  );

export const patientHistory = getSyncLifecycle(patientHistoryComponent, options);
