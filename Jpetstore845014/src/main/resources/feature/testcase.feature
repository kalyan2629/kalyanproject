@Jpetstore845014_feature
Feature: Jpet Website
@tc01_register
Scenario: Registration to the application
Given Enter user ID and password
When Add the account information
Then Save the account inforamtion
And Complete the registration

@tc02_Login
Scenario: Login to the Jpet store application
Given the user launches the website in chrome browser
When opens the login page
Then enter username and password
And click on login button

@tc03_Searchmain
Scenario: Search for the animal in the application
Given the search bar in the login page
When search for the animal you are looking for
Then enter the product id and name in the search bar
And click on the Search button

@tc04_invalidlogin
Scenario: Invalid login to the Jpet store application
Given :Open the jpet website
When :opens the next login page
Then :enter invalid username and invalid password
And :click on login click button

@tc05_addtocart
Scenario: Select the animal and add to cart
Given user launches the website in browser
When opens the signin page
Then click on cat logo and select one of them
And add product to the cart and proceed to checkout
