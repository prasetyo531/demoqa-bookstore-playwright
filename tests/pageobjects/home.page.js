export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cardElements = page.locator(".card");
  }

  async navigate() {
    await this.page.goto("/");
  }

  async navigateLogin() {
    await this.page.goto("/login"); // atau '/' sesuai lokasi real
  }

  async getCardTitles() {
    return this.cardElements.allInnerTexts();
  }
}
