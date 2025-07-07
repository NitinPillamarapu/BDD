import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const bdd = createBdd();

const { Given, When, Then } = bdd;

Given('I navigate to the login page', async function ({page}) {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  console.log("Url is loaded")
});

When('I login with username {string} and password {string}', async function ({page}, username, password) {
  const login = await page.locator(`//section[@id='login']`)
  await expect(login).toBeVisible();
  console.log("Login page displayed")
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#submit');
  console.log("Clicked on Login button")
});

Then('I should see the success message {string}', async function ({page}, sucessMessgae) {
  const welcome = await page.locator('//*[@id="loop-container"]/div/article/div[1]/h1').innerText();
  expect(welcome).toContain(sucessMessgae);
  console.log("Success message displayed")
});

Then('Logout of the application', async function ({page}) {
  await page.getByText('Log out').click();
  const login = await page.locator(`//section[@id='login']`);
  await expect(login).toBeVisible({ timeout: 5000 });
  console.log("Logged out successfully")
});

Then('I should see the error message {string}', async function ({page}, errorMessage) {
  const errorMsg = await page.locator(`#error`).innerText();
  expect(errorMsg).toContain(errorMessage);
  console.log("Error message displayed")
});

//Scenario for the data table
Given('The user logs in with the following credentials:', async function ({ page }, dataTable) {
  const credentials = dataTable.hashes();

  for (const { username, password } of credentials) {
    await expect(page.locator(`//section[@id='login']`)).toBeVisible();
    console.log(`Attempting login for: ${username}`);

    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#submit');

    // Determine success or failure
    const successHeading = page.locator('//*[@id="loop-container"]/div/article/div[1]/h1');
    const errorMsg = page.locator('#error');

    if (await successHeading.isVisible()) {
      const message = await successHeading.innerText();
      console.log(`Success: ${username} - "${message}"`);
      await page.getByText('Log out').click(); // logout to reset state
    } else if (await errorMsg.isVisible()) {
      const errorText = await errorMsg.innerText();
      console.log(`Error for ${username}: "${errorText}"`);
    } else {
      console.warn(`No success or error message visible for ${username}`);
    }
  }
});