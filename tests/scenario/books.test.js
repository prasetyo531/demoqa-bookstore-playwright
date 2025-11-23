import { test } from "../fixtures/setup.page";
import { loginDataSet } from "../data/login.data";
import { loginUser } from "../utils/login.helper";

test.describe("@pipeline - Books Flow", () => {
  test.beforeEach(async ({ homePage, onboardingPage }) => {
    await loginUser(homePage, onboardingPage, loginDataSet.validUser);
  });

  test("TC-003: As a user, I should be able to view the complete list of books when I open the Book Store page", async ({
    homePage
  }) => {
    await homePage.navigate("/books");

    await homePage.waitTableDisplayed();
  });

  test("TC-004: As a user, I should be able to search for a book by a valid keyword and see matching results", async ({
    homePage
  }) => {
    await homePage.navigate("/books");

    await homePage.searchBookAndWaitDisplayed("Git Pocket Guide");
  });
});