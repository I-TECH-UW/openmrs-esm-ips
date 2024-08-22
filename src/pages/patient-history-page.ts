import { type Page } from '@playwright/test';

export class PatientHistoryPage {
  constructor(readonly page: Page) {}

  async goTo(uuid: string) {
    await this.page.goto('/openmrs/spa/patient/' + uuid + '/chart/Patient History');
  }
}