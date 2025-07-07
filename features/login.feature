Feature: Login functionality

Background:
    Given I navigate to the login page

  @smoke
  Scenario: User should be able to log in with valid credentials
    When I login with username "student" and password "Password123"
    Then I should see the success message "Logged In Successfully"
    And Logout of the application

  @negative
  Scenario Outline: User should see an error message when logging in with invalid credentials
    When I login with username "<username>" and password "<password>"
    Then I should see the error message "<message>"

  Examples:
  | username       | password         | message                     |
  | incorrectUser  | Password123      | Your username is invalid!   |
  | student        | incorrectPassword| Your password is invalid!   |

  @regression
  Scenario: User logs in with multiple credentials
    Given The user logs in with the following credentials:
    | username       | password         |
    | student        | Password123      |
    | incorrectUser  | Password123      |
    | student        | incorrectPassword|

