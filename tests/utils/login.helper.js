export async function loginUser(homePage, onboardingPage, data) {
  await homePage.navigate("/login");

  await onboardingPage.fillUsername(data.username);
  await onboardingPage.fillPassword(data.password);
  await onboardingPage.clickLogin();
}
