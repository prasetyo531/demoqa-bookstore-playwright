import { test as base } from "@playwright/test";
import { HomePage } from "../pageobjects/home.page";
import { OnboardingPage } from "../pageobjects/onboarding.page";

/** @typedef {{ homePage: HomePage, onboardingPage: OnboardingPage }} Fixtures */
/** @type {import('@playwright/test').TestType<Fixtures, {}>} */
export const test = base.extend({
  homePage: async ({ page }, use) => use(new HomePage(page)),
  onboardingPage: async ({ page }, use) => use(new OnboardingPage(page)),
});
