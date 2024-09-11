import { type InternationalPatientSummary } from '../types';
import { restBaseUrl } from '@openmrs/esm-framework';
import useSWR from 'swr';

const useIpsResource = (uuid: string) => {
  const url = `/openmrs` + `${restBaseUrl}/patient/${uuid}/patientsummary`;
  const fetcher = (url: string | URL | Request): Promise<InternationalPatientSummary> =>
    fetch(url).then((res) => res.json());
  const { data: summaries, error, isLoading } = useSWR<InternationalPatientSummary>(url, fetcher);
  return {
    summaries,
    error,
    isLoading,
  };
};

export default useIpsResource;
