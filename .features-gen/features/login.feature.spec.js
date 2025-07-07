// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('I navigate to the login page', null, { page }); 
  });
  
  test('User should be able to log in with valid credentials', { tag: ['@smoke'] }, async ({ When, page, Then, And }) => { 
    await When('I login with username "student" and password "Password123"', null, { page }); 
    await Then('I should see the success message "Logged In Successfully"', null, { page }); 
    await And('Logout of the application', null, { page }); 
  });

  test.describe('User should see an error message when logging in with invalid credentials', () => {

    test('Example #1', { tag: ['@negative'] }, async ({ When, page, Then }) => { 
      await When('I login with username "incorrectUser" and password "Password123"', null, { page }); 
      await Then('I should see the error message "Your username is invalid!"', null, { page }); 
    });

    test('Example #2', { tag: ['@negative'] }, async ({ When, page, Then }) => { 
      await When('I login with username "student" and password "incorrectPassword"', null, { page }); 
      await Then('I should see the error message "Your password is invalid!"', null, { page }); 
    });

  });

  test('User logs in with multiple credentials', { tag: ['@regression'] }, async ({ Given, page }) => { 
    await Given('The user logs in with the following credentials:', {"dataTable":{"rows":[{"cells":[{"value":"username"},{"value":"password"}]},{"cells":[{"value":"student"},{"value":"Password123"}]},{"cells":[{"value":"incorrectUser"},{"value":"Password123"}]},{"cells":[{"value":"student"},{"value":"incorrectPassword"}]}]}}, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I login with username \"student\" and password \"Password123\"","stepMatchArguments":[{"group":{"start":22,"value":"\"student\"","children":[{"start":23,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"Password123\"","children":[{"start":46,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the success message \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Logged In Successfully\"","children":[{"start":34,"value":"Logged In Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And Logout of the application","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I login with username \"incorrectUser\" and password \"Password123\"","stepMatchArguments":[{"group":{"start":22,"value":"\"incorrectUser\"","children":[{"start":23,"value":"incorrectUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"Password123\"","children":[{"start":52,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your username is invalid!\"","children":[{"start":32,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":20,"tags":["@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I login with username \"student\" and password \"incorrectPassword\"","stepMatchArguments":[{"group":{"start":22,"value":"\"student\"","children":[{"start":23,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"incorrectPassword\"","children":[{"start":46,"value":"incorrectPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your password is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your password is invalid!\"","children":[{"start":32,"value":"Your password is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":23,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given The user logs in with the following credentials:","stepMatchArguments":[]}]},
]; // bdd-data-end