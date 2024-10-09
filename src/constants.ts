export const spaRoot = window['getOpenmrsSpaBase']();
export const historyBasePath = '/patient/:patientUuid/chart';
export const historyDashboardPath = `${historyBasePath}/:view/*`;
