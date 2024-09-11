import { type ReactI18NextChild } from 'react-i18next';

export interface DashboardLinkConfig {
  path: string;
  title: string;
  moduleName: string;
}

export interface DashboardConfig extends DashboardLinkConfig {
  slot: string;
}

export interface InternationalPatientSummary {
  [x: string]: any;
  resource: {
    id: string;
    category: {
      coding: Array<{
        system: string;
        code: string;
        display: string;
      }>;
    };
    clinicalStatus: {
      coding: Array<{
        system: string;
        code: string;
      }>;
    };
    code: {
      coding: Array<{
        system: string;
        code: string;
        display: string;
      }>;
    };
    criticality: string;
    dosage: Array<{
      timing: {
        repeat: {
          count: number;
          periodUnit: string;
        };
      };
      route: Array<{
        coding: Array<{
          system: string;
          code: string;
          display: string;
        }>;
      }>;
      doseAndRate: Array<{
        type: Array<{
          coding: Array<{
            system: string;
            code: string;
            display: string;
          }>;
        }>;
        doseQuantity: {
          value: number;
          unit: string;
          system: string;
          code: number;
        };
      }>;
    }>;
    effectiveDateTime: string;
    medicationReference: {
      reference: string;
    };
    occurrenceDateTime: string;
    resourceType:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | Iterable<ReactI18NextChild>;
    route: {
      coding: Array<{
        system: string;
        code: string;
        display: string;
      }>;
    };
    severity: {
      coding: Array<{
        system: string;
        code: string;
        display: string;
      }>;
    };
    status: string;
    text: { div: any };
    vaccineCode: {
      coding: Array<{
        system: string;
        code: string;
        display: string;
      }>;
    };
    valueCodeableConcept: {
      coding: Array<{
        system: string;
        code: string;
        display: string;
      }>;
    };
    verificationStatus: {
      coding: Array<{
        system: string;
        code: string;
      }>;
    };
  };
}
