import { expect } from "@playwright/test";
import { test } from "../fixtures/setup.page.js";

test("User can register new account", async ({ homePage, onboardingPage }) => {
  await homePage.navigateLogin();
  await onboardingPage.clickNewUser();

  await onboardingPage.fillFirstName("admin");
  await onboardingPage.fillLastName("admin");
  await onboardingPage.fillUsername("adminqa1");
  await onboardingPage.fillPassword("Camelcase01!");

  // CAPTCHA (Kalau fail di demoqa, itu normal)
  await onboardingPage.solveCaptcha();

  await onboardingPage.clickRegister();

  // Optional validation
  await expect(onboardingPage.page).toHaveURL(/login/);
});
