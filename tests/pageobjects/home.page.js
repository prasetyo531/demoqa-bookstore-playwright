export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cardElements = page.locator(".card");
    this.sectionUserRow = (username) => page.getByText(username);

    // locator books table
    this.sectionTitle = page.getByText("Title");
    this.sectionAuthor = page.getByText("Author");
    this.sectionPublisher = page.getByText("Publisher");
    this.sectionReactTable = page.locator(".ReactTable");

    // search flow
    this.inputSearchBox = page.getByRole("textbox", { name: "Type to search" });
    this.btnSearchIcon = page.locator("#basic-addon2 > span");

    // dynamic row result locator (text depends on search)
    this.sectionSearchResult = (text) => page.getByRole("rowgroup").filter({ hasText: text });
  }

  async navigate(string) {
    await this.page.goto(string);
  }

  async navigateLogin() {
    await this.page.goto("/login");
  }

  async waitTableDisplayed() {
    await this.sectionTitle.waitFor({ state: "visible" });
    await this.sectionAuthor.waitFor({ state: "visible" });
    await this.sectionPublisher.waitFor({ state: "visible" });
  }

  async waitUserRowVisible(username) {
    await this.sectionUserRow(username).waitFor({ state: "visible" });
  }

  async searchBookAndWaitDisplayed(text) {
    await this.inputSearchBox.click();
    await this.inputSearchBox.fill(text);
    await this.btnSearchIcon.click();

    await this.sectionSearchResult(text).waitFor({
      state: "visible"
    });
  }
}
