export async function registerNewUser(homePage, onboardingPage, data) {
  await homePage.navigateLogin();
  await onboardingPage.clickNewUser();

  await onboardingPage.fillFirstName(data.firstName);
  await onboardingPage.fillLastName(data.lastName);
  await onboardingPage.fillUsername(data.username);
  await onboardingPage.fillPassword(data.password);

  await onboardingPage.solveCaptcha();
  await onboardingPage.clickRegister();
}
