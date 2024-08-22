import useSWR from 'swr';

const fetcher = (...args:[patientUuid: any]) => fetch(...args).then((res) => res.json());

const useIpsResource = () => {
  const {
    data: summaries,
    error,
    isLoading,
  } = useSWR('https://dd25f6cb-a999-43b0-b07a-b426bd9d0dc3.mock.pstmn.io/Patient/1234/$summary', fetcher);

  return {
    summaries,
    error,
    isLoading,
  };
};

export default useIpsResource;

