import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { historyBasePath, historyDashboardPath, spaRoot } from './constants';
import PatientHistory from './history/patient-history.component';

import styles from './root.scss';

const Root: React.FC = () => {
  return (
    <>
      <div className={styles.patientHistoryWrapper}>
        <BrowserRouter basename={spaRoot}>
          <Routes>
            <Route path={historyBasePath} element={<PatientHistory />} />
            <Route path={historyDashboardPath} element={<PatientHistory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Root;
