import { test } from "../fixtures/setup.page";
import { registerDataSet } from "../data/register.data";

test.describe("@pipeline - User Registration Flow", () => {
  test("TC-001: As a guest, I should successfully register", async ({
    homePage,
    onboardingPage,
  }) => {
    await homePage.navigateLogin();
    await onboardingPage.clickNewUser();

    await onboardingPage.fillFirstName(registerDataSet.validUser.firstName);
    await onboardingPage.fillLastName(registerDataSet.validUser.lastName);
    await onboardingPage.fillUsername(registerDataSet.validUser.username);
    await onboardingPage.fillPassword(registerDataSet.validUser.password);

    await onboardingPage.solveCaptcha();
    await onboardingPage.clickRegister();
  });
});
