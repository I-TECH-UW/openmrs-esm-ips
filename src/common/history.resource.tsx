import { type InternationalPatientSummary } from '../types';
import { restBaseUrl } from '@openmrs/esm-framework';
import { openmrsFetch } from '@openmrs/esm-framework';
import useSWR from 'swr';

export function useIpsResource(uuid: string) {
  const url = `${restBaseUrl}/patient/${uuid}/patientsummary`;
  const { data: history, error, isLoading } = useSWR<{ data: InternationalPatientSummary }, Error>(url, openmrsFetch);
  return {
    history,
    error,
    isLoading,
  };
}

export function createIpsResource(uuid: string, abortController: AbortController) {
  const url = `${restBaseUrl}/patient/${uuid}/patientsummary`;
  return openmrsFetch<unknown>(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    signal: abortController.signal,
    body: {
      patient: uuid,
    },
  });
}
