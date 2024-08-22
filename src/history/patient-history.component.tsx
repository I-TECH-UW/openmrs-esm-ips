import React  from 'react';
import { useParams } from 'react-router-dom';
import HistoryDetailOverview from './history-detail-overview.component';

const PatientHistory: React.FC = () => {
  const { patientUuid } = useParams();
  return (
    <>
     <HistoryDetailOverview patientUuid={patientUuid} />
    </>
  );
}

export default PatientHistory;
