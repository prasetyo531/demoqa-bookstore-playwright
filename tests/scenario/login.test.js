import { test } from "../fixtures/setup.page";
import { loginDataSet } from "../data/login.data";

test.describe("@pipeline - User Login Flow", () => {
  test("TC-002: As a guest, I should successfully login", async ({
    homePage,
    onboardingPage,
  }) => {
    await homePage.navigate("/login");

    await onboardingPage.fillUsername(loginDataSet.validUser.username);
    await onboardingPage.fillPassword(loginDataSet.validUser.password);
    await onboardingPage.clickLogin();

    await homePage.waitUserRowVisible(loginDataSet.validUser.username);
  });
});