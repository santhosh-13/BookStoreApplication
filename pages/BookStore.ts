import { Page, expect } from '@playwright/test';

export class BookStorePage {
  constructor(private page: Page) {}

  get searchBox() {
    return this.page.getByPlaceholder('Type to search');
  }

  async searchBook(bookName: string) {
    await this.searchBox.fill(bookName);
  }

  async getBookRow(bookName: string) {
    return this.page.locator('tbody tr').filter({
      hasText: bookName
    });
  }

  async bookexists(bookName: string) {
    await expect(this.page.getByText(bookName)).toBeVisible();
  }
}