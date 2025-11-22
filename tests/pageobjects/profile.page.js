export class ProfilePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.tableHeader = page.getByText(
      "ImageTitleAuthorPublisherAction PreviousPage of 15 rows10 rows20 rows25 rows50"
    );
    this.btnGoToBookStore = page.getByRole("button", {
      name: "Go To Book Store",
    });
    this.btnDeleteAccount = page.getByRole("button", {
      name: "Delete Account",
    });
    this.btnClose = page.getByRole("button", { name: "Close" });
    this.btnDeleteAllBooks = page.getByRole("button", {
      name: "Delete All Books",
    });
    this.btnCancel = page.getByRole("button", { name: "Cancel" });
  }

  async clickTableHeader() {
    await this.tableHeader.click();
  }

  async clickGoToBookStore() {
    await this.btnGoToBookStore.click();
  }

  async clickDeleteAccount() {
    await this.btnDeleteAccount.click();
  }

  async clickClose() {
    await this.btnClose.click();
  }

  async clickDeleteAllBooks() {
    await this.btnDeleteAllBooks.click();
  }

  async clickCancel() {
    await this.btnCancel.click();
  }
}
