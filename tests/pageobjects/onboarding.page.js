export class OnboardingPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Buttons
    this.btnLogin = page.getByRole("button", { name: "Login" });
    this.btnNewUser = page.getByRole("button", { name: "New User" });
    this.btnRegister = page.getByRole("button", { name: "Register" });

    // Text fields
    this.inputFirstName = page.getByRole("textbox", { name: "First Name" });
    this.inputLastName = page.getByRole("textbox", { name: "Last Name" });
    this.inputUsername = page.getByRole("textbox", { name: "UserName" });
    this.inputPassword = page.getByRole("textbox", { name: "Password" });

    // CAPTCHA IFRAME
    this.iframeCaptcha = page.frameLocator('iframe[name^="a-"]');
    this.captchaCheckbox = this.iframeCaptcha.getByRole("checkbox", {
      name: "I'm not a robot",
    });
  }

  async clickLogin() {
    await this.btnLogin.click();
  }

  async clickNewUser() {
    await this.btnNewUser.click();
  }

  async fillFirstName(value) {
    await this.inputFirstName.fill(value);
  }

  async fillLastName(value) {
    await this.inputLastName.fill(value);
  }

  async fillUsername(value) {
    await this.inputUsername.fill(value);
  }

  async fillPassword(value) {
    await this.inputPassword.fill(value);
  }

  async solveCaptcha() {
    await this.captchaCheckbox.click();
  }

  async clickRegister() {
    this.page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    await this.btnRegister.click();
  }
}
