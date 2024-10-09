import { type FetchResponse } from '@openmrs/esm-framework';

export const mockPUTResponse: FetchResponse<unknown> = {
  data: {},
  headers: new Headers(),
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'OK',
  url: 'http://mock.url',
  type: 'error',
  clone: function (): Response {
    throw new Error('Function not implemented.');
  },
  body: undefined,
  bodyUsed: false,
  arrayBuffer: function (): Promise<ArrayBuffer> {
    throw new Error('Function not implemented.');
  },
  blob: function (): Promise<Blob> {
    throw new Error('Function not implemented.');
  },
  formData: function (): Promise<FormData> {
    throw new Error('Function not implemented.');
  },
  json: function (): Promise<any> {
    throw new Error('Function not implemented.');
  },
  text: function (): Promise<string> {
    throw new Error('Function not implemented.');
  },
};

export const mockIPS = {
  resourceType: 'Bundle',
  identifier: {
    system: 'urn:ietf:rfc:4122',
    value: '78a6728f-1b8a-40a1-9782-10f21497113c',
  },
  type: 'document',
  timestamp: '2024-10-01T11:07:02.423+00:00',
  entry: [
    {
      fullUrl: 'urn:uuid:af81ae36-d64a-41d9-b3d5-4d51bc9f9534',
      resource: {
        id: '333',
        resourceType: 'Composition',
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><div><h1>Allergies and Intolerances</h1><div><div><h5>Allergies And Intolerances</h5><table class="hapiPropertyTable"><thead><tr><th>Allergen</th><th>Status</th><th>Category</th><th>Reaction</th><th>Severity</th><th>Comments</th><th>Onset</th></tr></thead><tbody><tr id="AllergyIntolerance-https://hapi.fhir.org/baseR4/AllergyIntolerance/45031866/_history/1"><td> Penicillin allergy </td><td> active </td><td> MEDICATION </td><td> Rash </td><td> severe </td><td></td><td>Wed Jan 01 00:00:00 UTC 2020</td></tr></tbody></table></div></div></div><div><h1>Medication List</h1><div><div><h5>Medication Summary: Medication Requests</h5><table class="hapiPropertyTable"><thead><tr><th>Medication</th><th>Status</th><th>Route</th><th>Sig</th><th>Comments</th><th>Authored Date</th></tr></thead><tbody><tr id="MedicationRequest-https://hapi.fhir.org/baseR4/MedicationRequest/45031864/_history/1"><td> Lisinopril 10 MG Oral Tablet </td><td>Active</td><td> Oral route </td><td> Take one tablet by mouth daily </td><td></td><td>Sun Sep 01 00:00:00 UTC 2024</td></tr></tbody></table></div></div></div><div><h1>Problem List</h1><div><div><h5>Problem List</h5><table class="hapiPropertyTable"><thead><tr><th>Medical Problems</th><th>Status</th><th>Comments</th><th>Onset Date</th></tr></thead><tbody><tr id="Condition-https://hapi.fhir.org/baseR4/Condition/45031867/_history/1"><td> Diabetes mellitus type 2 </td><td> active </td><td></td><td> Tue Jan 01 00:00:00 UTC 2019 </td></tr></tbody></table></div></div></div><div><h1>History of Immunizations</h1><div><div><h5>Immunizations</h5><table class="hapiPropertyTable"><thead><tr><th>Immunization</th><th>Status</th><th>Dose Number</th><th>Manufacturer</th><th>Lot Number</th><th>Comments</th><th>Date</th></tr></thead><tbody><tr id="Immunization-https://hapi.fhir.org/baseR4/Immunization/45031865/_history/1"><td> COVID-19 Vaccine </td><td>COMPLETED</td><td></td><td></td><td>123456789</td><td></td><td> Sun Sep 01 10:00:00 UTC 2024 </td></tr></tbody></table></div></div></div><div><h1>Vital Signs</h1><div><div><h5>Vital Signs</h5><table class="hapiPropertyTable"><thead><tr><th>Code</th><th>Result</th><th>Unit</th><th>Interpretation</th><th>Comments</th><th>Date</th></tr></thead><tbody><tr id="Observation-https://hapi.fhir.org/baseR4/Observation/45031863/_history/1"><td> Blood pressure panel with all children optional </td><td></td><td></td><td></td><td> Sun Sep 01 08:00:00 UTC 2024 </td></tr></tbody></table></div></div></div><div><h1>Plan of Care</h1><div><div><h5>Plan of Care</h5><table class="hapiPropertyTable"><thead><tr><th>Activity</th><th>Intent</th><th>Comments</th><th>Planned Start</th><th>Planned End</th></tr></thead><tbody><tr id="CarePlan-https://hapi.fhir.org/baseR4/CarePlan/45031868/_history/1"><td>A care plan for managing type 2 diabetes.</td><td>plan</td><td></td><td>Sun Sep 01 00:00:00 UTC 2024</td><td>Tue Dec 31 00:00:00 UTC 2024</td></tr></tbody></table></div></div></div></div>',
        },
        status: 'final',
        type: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '60591-5',
              display: 'Patient Summary Document',
            },
          ],
        },
        subject: {
          reference: 'Patient/45031862',
        },
        date: '2024-10-01T11:07:02.006+00:00',
        author: [
          {
            reference: 'urn:uuid:3ababad8-b6ab-4cd0-8c0a-8cfb05258ee9',
          },
        ],
        title: 'Patient Summary as of 10/01/2024',
        confidentiality: 'N',
        section: [
          {
            title: 'Allergies and Intolerances',
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '48765-2',
                  display: 'Allergies and adverse reactions Document',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><h5>Allergies And Intolerances</h5><table class="hapiPropertyTable"><thead><tr><th>Allergen</th><th>Status</th><th>Category</th><th>Reaction</th><th>Severity</th><th>Comments</th><th>Onset</th></tr></thead><tbody><tr id="AllergyIntolerance-https://hapi.fhir.org/baseR4/AllergyIntolerance/45031866/_history/1"><td> Penicillin allergy </td><td> active </td><td> MEDICATION </td><td> Rash </td><td> severe </td><td></td><td>Wed Jan 01 00:00:00 UTC 2020</td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'AllergyIntolerance/45031866',
              },
            ],
          },
          {
            title: 'Medication List',
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '10160-0',
                  display: 'History of Medication use Narrative',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><h5>Medication Summary: Medication Requests</h5><table class="hapiPropertyTable"><thead><tr><th>Medication</th><th>Status</th><th>Route</th><th>Sig</th><th>Comments</th><th>Authored Date</th></tr></thead><tbody><tr id="MedicationRequest-https://hapi.fhir.org/baseR4/MedicationRequest/45031864/_history/1"><td> Lisinopril 10 MG Oral Tablet </td><td>Active</td><td> Oral route </td><td> Take one tablet by mouth daily </td><td></td><td>Sun Sep 01 00:00:00 UTC 2024</td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'MedicationRequest/45031864',
              },
            ],
          },
          {
            title: 'Problem List',
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '11450-4',
                  display: 'Problem list - Reported',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><h5>Problem List</h5><table class="hapiPropertyTable"><thead><tr><th>Medical Problems</th><th>Status</th><th>Comments</th><th>Onset Date</th></tr></thead><tbody><tr id="Condition-https://hapi.fhir.org/baseR4/Condition/45031867/_history/1"><td> Diabetes mellitus type 2 </td><td> active </td><td></td><td> Tue Jan 01 00:00:00 UTC 2019 </td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'Condition/45031867',
              },
            ],
          },
          {
            title: 'History of Immunizations',
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '11369-6',
                  display: 'History of Immunization Narrative',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><h5>Immunizations</h5><table class="hapiPropertyTable"><thead><tr><th>Immunization</th><th>Status</th><th>Dose Number</th><th>Manufacturer</th><th>Lot Number</th><th>Comments</th><th>Date</th></tr></thead><tbody><tr id="Immunization-https://hapi.fhir.org/baseR4/Immunization/45031865/_history/1"><td> COVID-19 Vaccine </td><td>COMPLETED</td><td></td><td></td><td>123456789</td><td></td><td> Sun Sep 01 10:00:00 UTC 2024 </td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'Immunization/45031865',
              },
            ],
          },
          {
            title: 'Vital Signs',
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8716-3',
                  display: 'Vital signs',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><h5>Vital Signs</h5><table class="hapiPropertyTable"><thead><tr><th>Code</th><th>Result</th><th>Unit</th><th>Interpretation</th><th>Comments</th><th>Date</th></tr></thead><tbody><tr id="Observation-https://hapi.fhir.org/baseR4/Observation/45031863/_history/1"><td> Blood pressure panel with all children optional </td><td></td><td></td><td></td><td> Sun Sep 01 08:00:00 UTC 2024 </td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'Observation/45031863',
              },
            ],
          },
          {
            title: 'Plan of Care',
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '18776-5',
                  display: 'Plan of care note',
                },
              ],
            },
            text: {
              status: 'generated',
              div: '<div xmlns="http://www.w3.org/1999/xhtml"><h5>Plan of Care</h5><table class="hapiPropertyTable"><thead><tr><th>Activity</th><th>Intent</th><th>Comments</th><th>Planned Start</th><th>Planned End</th></tr></thead><tbody><tr id="CarePlan-https://hapi.fhir.org/baseR4/CarePlan/45031868/_history/1"><td>A care plan for managing type 2 diabetes.</td><td>plan</td><td></td><td>Sun Sep 01 00:00:00 UTC 2024</td><td>Tue Dec 31 00:00:00 UTC 2024</td></tr></tbody></table></div>',
            },
            entry: [
              {
                reference: 'CarePlan/45031868',
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: 'https://hapi.fhir.org/baseR4/Patient/45031862',
      resource: {
        resourceType: 'Patient',
        id: '45031862',
        meta: {
          versionId: '8',
          lastUpdated: '2024-09-27T10:17:39.054+00:00',
          source: '#oZK4Hdq7t14ouwqb',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>32/34/43/42</td></tr></tbody></table></div>',
        },
        identifier: [
          {
            use: 'official',
            system: 'http://openmrs.org',
            value: '32/34/43/42',
          },
        ],
      },
    },
    {
      fullUrl: 'https://hapi.fhir.org/baseR4/AllergyIntolerance/45031866',
      resource: {
        resourceType: 'AllergyIntolerance',
        id: '45031866',
        meta: {
          versionId: '1',
          lastUpdated: '2024-09-27T08:41:12.839+00:00',
          source: '#7mJ9QU0efQGzDnBd',
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/narrativeLink',
            valueUrl:
              'urn:uuid:af81ae36-d64a-41d9-b3d5-4d51bc9f9534#AllergyIntolerance-https://hapi.fhir.org/baseR4/AllergyIntolerance/45031866/_history/1',
          },
        ],
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical',
              code: 'active',
              display: 'Active',
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification',
              code: 'confirmed',
              display: 'Confirmed',
            },
          ],
        },
        type: 'allergy',
        category: ['medication'],
        criticality: 'high',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '7980',
              display: 'Penicillin allergy',
            },
          ],
        },
        patient: {
          reference: 'Patient/45031862',
        },
        onsetDateTime: '2020-01-01T00:00:00Z',
        reaction: [
          {
            substance: {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '59109004',
                  display: 'Penicillin',
                },
              ],
            },
            manifestation: [
              {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '271807003',
                    display: 'Rash',
                  },
                ],
              },
            ],
            severity: 'severe',
          },
        ],
      },
    },
    {
      fullUrl: 'https://hapi.fhir.org/baseR4/MedicationRequest/45031864',
      resource: {
        resourceType: 'MedicationRequest',
        id: '45031864',
        meta: {
          versionId: '1',
          lastUpdated: '2024-09-27T08:41:07.380+00:00',
          source: '#xTCsZQ9MlhUjgLTX',
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/narrativeLink',
            valueUrl:
              'urn:uuid:af81ae36-d64a-41d9-b3d5-4d51bc9f9534#MedicationRequest-https://hapi.fhir.org/baseR4/MedicationRequest/45031864/_history/1',
          },
        ],
        status: 'active',
        intent: 'order',
        medicationCodeableConcept: {
          coding: [
            {
              system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
              code: '1049502',
              display: 'Lisinopril 10 MG Oral Tablet',
            },
          ],
        },
        subject: {
          reference: 'Patient/45031862',
        },
        authoredOn: '2024-09-01',
        dosageInstruction: [
          {
            text: 'Take one tablet by mouth daily',
            timing: {
              repeat: {
                frequency: 1,
                period: 1,
                periodUnit: 'd',
              },
            },
            route: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                  code: 'PO',
                  display: 'Oral route',
                },
              ],
            },
            doseAndRate: [
              {
                doseQuantity: {
                  value: 10,
                  unit: 'mg',
                  system: 'http://unitsofmeasure.org',
                  code: 'mg',
                },
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: 'https://hapi.fhir.org/baseR4/Condition/45031867',
      resource: {
        resourceType: 'Condition',
        id: '45031867',
        meta: {
          versionId: '1',
          lastUpdated: '2024-09-27T08:41:15.511+00:00',
          source: '#UTz206I3XUygBIoq',
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/narrativeLink',
            valueUrl:
              'urn:uuid:af81ae36-d64a-41d9-b3d5-4d51bc9f9534#Condition-https://hapi.fhir.org/baseR4/Condition/45031867/_history/1',
          },
        ],
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'active',
              display: 'Active',
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
              code: 'confirmed',
              display: 'Confirmed',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                code: 'encounter-diagnosis',
                display: 'Encounter Diagnosis',
              },
            ],
          },
        ],
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '255604002',
              display: 'Mild',
            },
          ],
        },
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '44054006',
              display: 'Diabetes mellitus type 2',
            },
          ],
        },
        subject: {
          reference: 'Patient/45031862',
        },
        onsetDateTime: '2019-01-01T00:00:00Z',
        abatementDateTime: '2024-09-01T00:00:00Z',
      },
    },
    {
      fullUrl: 'https://hapi.fhir.org/baseR4/Immunization/45031865',
      resource: {
        resourceType: 'Immunization',
        id: '45031865',
        meta: {
          versionId: '1',
          lastUpdated: '2024-09-27T08:41:10.409+00:00',
          source: '#6AZ3a0XZM3oRGU7W',
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/narrativeLink',
            valueUrl:
              'urn:uuid:af81ae36-d64a-41d9-b3d5-4d51bc9f9534#Immunization-https://hapi.fhir.org/baseR4/Immunization/45031865/_history/1',
          },
        ],
        status: 'completed',
        vaccineCode: {
          coding: [
            {
              system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
              code: '2076001',
              display: 'COVID-19 Vaccine',
            },
          ],
        },
        patient: {
          reference: 'Patient/45031862',
        },
        occurrenceDateTime: '2024-09-01T10:00:00Z',
        lotNumber: '123456789',
        expirationDate: '2025-09-01',
        site: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
              code: 'LA',
              display: 'Left Arm',
            },
          ],
        },
        route: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
              code: 'IM',
              display: 'Intramuscular',
            },
          ],
        },
        doseQuantity: {
          value: 0.5,
          unit: 'mL',
          system: 'http://unitsofmeasure.org',
          code: 'mL',
        },
      },
    },
    {
      fullUrl: 'https://hapi.fhir.org/baseR4/Observation/45031863',
      resource: {
        resourceType: 'Observation',
        id: '45031863',
        meta: {
          versionId: '1',
          lastUpdated: '2024-09-27T08:41:03.309+00:00',
          source: '#2u8l7byu08MGEG4U',
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/narrativeLink',
            valueUrl:
              'urn:uuid:af81ae36-d64a-41d9-b3d5-4d51bc9f9534#Observation-https://hapi.fhir.org/baseR4/Observation/45031863/_history/1',
          },
        ],
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '85354-9',
              display: 'Blood pressure panel with all children optional',
            },
          ],
        },
        subject: {
          reference: 'Patient/45031862',
        },
        effectiveDateTime: '2024-09-01T08:00:00Z',
        component: [
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8480-6',
                  display: 'Systolic blood pressure',
                },
              ],
            },
            valueQuantity: {
              value: 120,
              unit: 'mmHg',
              system: 'http://unitsofmeasure.org',
              code: 'mm[Hg]',
            },
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8462-4',
                  display: 'Diastolic blood pressure',
                },
              ],
            },
            valueQuantity: {
              value: 80,
              unit: 'mmHg',
              system: 'http://unitsofmeasure.org',
              code: 'mm[Hg]',
            },
          },
        ],
      },
    },
    {
      fullUrl: 'https://hapi.fhir.org/baseR4/CarePlan/45031868',
      resource: {
        resourceType: 'CarePlan',
        id: '45031868',
        meta: {
          versionId: '1',
          lastUpdated: '2024-09-27T08:41:18.586+00:00',
          source: '#Rvs29GWm7BHO3e3y',
        },
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/narrativeLink',
            valueUrl:
              'urn:uuid:af81ae36-d64a-41d9-b3d5-4d51bc9f9534#CarePlan-https://hapi.fhir.org/baseR4/CarePlan/45031868/_history/1',
          },
        ],
        status: 'active',
        intent: 'plan',
        title: 'Diabetes Treatment Plan',
        description: 'A care plan for managing type 2 diabetes.',
        subject: {
          reference: 'Patient/45031862',
        },
        period: {
          start: '2024-09-01T00:00:00Z',
          end: '2024-12-31T00:00:00Z',
        },
        activity: [
          {
            detail: {
              kind: 'MedicationRequest',
              status: 'in-progress',
              productCodeableConcept: {
                coding: [
                  {
                    system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                    code: '860975',
                    display: 'Metformin 500 MG Oral Tablet',
                  },
                ],
              },
              dailyAmount: {
                value: 2,
                unit: 'tablets',
              },
              description: 'Take metformin 500 mg twice daily.',
            },
          },
          {
            detail: {
              kind: 'Appointment',
              status: 'scheduled',
              scheduledTiming: {
                repeat: {
                  frequency: 1,
                  period: 3,
                  periodUnit: 'mo',
                },
              },
              description: 'Regular check-up with endocrinologist.',
            },
          },
        ],
      },
    },
    {
      fullUrl: 'urn:uuid:3ababad8-b6ab-4cd0-8c0a-8cfb05258ee9',
      resource: {
        id: '333',
        resourceType: 'Organization',
        name: 'eHealthLab - University of Cyprus',
        address: [
          {
            line: ['1 University Avenue'],
            city: 'Nicosia',
            postalCode: '2109',
            country: 'CY',
          },
        ],
      },
    },
  ],
};
