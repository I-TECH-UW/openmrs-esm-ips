import { useMemo } from 'react';
import { restBaseUrl } from '@openmrs/esm-framework';
import useSWR from 'swr';

const fetcher = (...args: [patientUuid: string]) => fetch(...args).then((res) => res.json());

const useIpsResource = (uuid: string) => {
  const {
    data: summaries,
    error,
    isLoading,
  } = useSWR(`/openmrs` + `${restBaseUrl}/patient/${uuid}/patientsummary`, fetcher);
  return {
    summaries,
    error,
    isLoading,
  };
};

export default useIpsResource;
