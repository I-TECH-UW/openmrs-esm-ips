import { type InternationalPatientSummary } from '../types';
import { restBaseUrl } from '@openmrs/esm-framework';
import { openmrsFetch } from '@openmrs/esm-framework';
import useSWR from 'swr';

const useIpsResource = (uuid: string) => {
  const url = `${restBaseUrl}/patient/${uuid}/patientsummary`;
  const { data: summaries, error, isLoading } = useSWR<{ data: InternationalPatientSummary }, Error>(url, openmrsFetch);
  return {
    summaries,
    error,
    isLoading,
  };
};

export default useIpsResource;
