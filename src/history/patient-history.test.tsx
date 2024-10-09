import { fireEvent, render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import HistoryDetailOverview from './history-detail-overview.component';
import React from 'react';
import { FetchResponse, usePatient } from '@openmrs/esm-framework';
import { createIpsResource, useIpsResource } from '../common/history.resource';
import { mockIPS, mockPUTResponse } from '../__mocks__/test.util';

const mockUsePatient = jest.mocked(usePatient);
const mockUseIpsResource = jest.mocked(useIpsResource);

jest.mock('../common/history.resource');

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: jest.fn().mockReturnValue({
    pathname: 'openmrs/spa/patient',
  }),
  useHistory: () => [],
  useParams: jest.fn().mockReturnValue({ patientUuid: 'undefined' }),
}));

describe('Display patient IPS', () => {
  beforeEach(() => {
    const mockUseParams = jest.mocked(useParams);
    mockUseParams.mockReturnValue({ patientUuid: 'mock-uuid' });
  });

  it('renders without crashing', () => {
    mockUsePatient.mockReturnValue({
      isLoading: false,
      patient: undefined,
      patientUuid: 'mock-uuid',
      error: null,
    });

    mockUseIpsResource.mockReturnValue({
      isLoading: false,
      history: { data: null },
      error: undefined,
    });
    render(<HistoryDetailOverview patientUuid={'mock-uuid'} />, {});
  });

  it('renders loading before resolving ips', async () => {
    mockUsePatient.mockReturnValue({
      isLoading: false,
      patient: undefined,
      patientUuid: 'mock-uuid',
      error: null,
    });

    mockUseIpsResource.mockReturnValue({
      isLoading: true,
      history: { data: null },
      error: undefined,
    });
    render(<HistoryDetailOverview patientUuid={'mock-uuid'} />, {});

    expect(screen.getByText('Loading ...')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders the ips', async () => {
    mockUsePatient.mockReturnValue({
      isLoading: false,
      patient: undefined,
      patientUuid: 'mock-uuid',
      error: null,
    });

    mockUseIpsResource.mockReturnValue({
      isLoading: false,
      history: { data: mockIPS },
      error: undefined,
    });

    render(<HistoryDetailOverview patientUuid={'mock-uuid'} />, {});

    expect(screen.getByText('Refresh')).toBeInTheDocument();
    expect(screen.getByText('AllergyIntolerance')).toBeInTheDocument();
    expect(screen.getByText('Condition')).toBeInTheDocument();
    expect(screen.getByText('Immunization')).toBeInTheDocument();
    expect(screen.getByText('Observation')).toBeInTheDocument();

    expect(screen.getByText('Penicillin allergy')).toBeInTheDocument();
    expect(screen.getByText('Diabetes mellitus type 2')).toBeInTheDocument();
    expect(screen.getByText('COVID-19 Vaccine')).toBeInTheDocument();
    expect(screen.getByText('Blood pressure panel with all children optional')).toBeInTheDocument();
  });

  it('refresh button triggers downloading new ips', async () => {
    const mockCreateIpsResource = jest.mocked(createIpsResource);

    mockCreateIpsResource.mockReturnValue({
      then: function <TResult1 = FetchResponse<unknown>, TResult2 = never>(
        onfulfilled?: (value: FetchResponse<unknown>) => TResult1 | PromiseLike<TResult1>,
        onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>,
      ): Promise<TResult1 | TResult2> {
        return Promise.resolve(onfulfilled ? onfulfilled(mockPUTResponse) : (mockPUTResponse as TResult1));
      },
      catch: function <TResult = never>(
        onrejected?: (reason: any) => TResult | PromiseLike<TResult>,
      ): Promise<FetchResponse<unknown> | TResult> {
        throw new Error('Function not implemented.');
      },
      finally: function (onfinally?: () => void): Promise<FetchResponse<unknown>> {
        return Promise.resolve(mockPUTResponse);
      },
      [Symbol.toStringTag]: '',
    });

    mockUsePatient.mockReturnValue({
      isLoading: false,
      patient: undefined,
      patientUuid: 'mock-uuid',
      error: null,
    });

    mockUseIpsResource.mockReturnValue({
      isLoading: false,
      history: { data: mockIPS },
      error: undefined,
    });

    render(<HistoryDetailOverview patientUuid={'mock-uuid'} />, {});

    expect(screen.getByText('Refresh')).toBeInTheDocument();
    expect(screen.getByText('AllergyIntolerance')).toBeInTheDocument();
    expect(screen.getByText('Condition')).toBeInTheDocument();
    expect(screen.getByText('Immunization')).toBeInTheDocument();
    expect(screen.getByText('Observation')).toBeInTheDocument();

    expect(screen.getByText('Penicillin allergy')).toBeInTheDocument();
    expect(screen.getByText('Diabetes mellitus type 2')).toBeInTheDocument();
    expect(screen.getByText('COVID-19 Vaccine')).toBeInTheDocument();
    expect(screen.getByText('Blood pressure panel with all children optional')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Refresh'));

    expect(mockCreateIpsResource).toHaveBeenCalled();
  });
});
