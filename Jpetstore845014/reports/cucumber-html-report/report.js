$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Jpet Website",
  "description": "",
  "id": "jpet-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Jpetstore845014_feature"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Registration to the application",
  "description": "",
  "id": "jpet-website;registration-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tc01_register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Enter user ID and password",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Add the account information",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Save the account inforamtion",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Complete the registration",
  "keyword": "And "
});
formatter.match({
  "location": "Registration_test.enter_user_ID_and_password()"
});
formatter.result({
  "duration": 15037708900,
  "status": "passed"
});
formatter.match({
  "location": "Registration_test.add_the_account_information()"
});
formatter.result({
  "duration": 1189724400,
  "status": "passed"
});
formatter.match({
  "location": "Registration_test.save_the_account_inforamtion()"
});
formatter.result({
  "duration": 2630896700,
  "status": "passed"
});
formatter.match({
  "location": "Registration_test.complete_the_registration()"
});
formatter.result({
  "duration": 5852457100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login to the Jpet store application",
  "description": "",
  "id": "jpet-website;login-to-the-jpet-store-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tc02_Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the website in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginmain_test.the_user_launches_the_website_in_chrome_browser()"
});
formatter.result({
  "duration": 15225001500,
  "status": "passed"
});
formatter.match({
  "location": "Loginmain_test.opens_the_login_page()"
});
formatter.result({
  "duration": 3501381500,
  "status": "passed"
});
formatter.match({
  "location": "Loginmain_test.enter_username_and_password()"
});
formatter.result({
  "duration": 30246736100,
  "status": "passed"
});
formatter.match({
  "location": "Loginmain_test.click_on_login_button()"
});
formatter.result({
  "duration": 164358100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search for the animal in the application",
  "description": "",
  "id": "jpet-website;search-for-the-animal-in-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc03_Searchmain"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the search bar in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "search for the animal you are looking for",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "enter the product id and name in the search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "Mainsearch_test.the_search_bar_in_the_login_page()"
});
formatter.result({
  "duration": 11229912100,
  "status": "passed"
});
formatter.match({
  "location": "Mainsearch_test.search_for_the_animal_you_are_looking_for()"
});
formatter.result({
  "duration": 218569600,
  "status": "passed"
});
formatter.match({
  "location": "Mainsearch_test.enter_the_product_id_and_name_in_the_search_bar()"
});
formatter.result({
  "duration": 4262286000,
  "status": "passed"
});
formatter.match({
  "location": "Mainsearch_test.click_on_the_Search_button()"
});
formatter.result({
  "duration": 5173991000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid login to the Jpet store application",
  "description": "",
  "id": "jpet-website;invalid-login-to-the-jpet-store-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tc04_invalidlogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": ":Open the jpet website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": ":opens the next login page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": ":enter invalid username and invalid password",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": ":click on login click button",
  "keyword": "And "
});
formatter.match({
  "location": "Invalidlogin_test.open_the_jpet_website()"
});
formatter.result({
  "duration": 15768081400,
  "status": "passed"
});
formatter.match({
  "location": "Invalidlogin_test.opens_the_next_login_page()"
});
formatter.result({
  "duration": 2595526400,
  "status": "passed"
});
formatter.match({
  "location": "Invalidlogin_test.enter_invalid_username_and_invalid_password()"
});
formatter.result({
  "duration": 388686800,
  "status": "passed"
});
formatter.match({
  "location": "Invalidlogin_test.click_on_login_click_button()"
});
formatter.result({
  "duration": 8685691100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Select the animal and add to cart",
  "description": "",
  "id": "jpet-website;select-the-animal-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@tc05_addtocart"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user launches the website in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "opens the signin page",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "click on cat logo and select one of them",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "add product to the cart and proceed to checkout",
  "keyword": "And "
});
formatter.match({
  "location": "Addtocart_test.user_launches_the_website_in_browser()"
});
formatter.result({
  "duration": 15132178700,
  "status": "passed"
});
formatter.match({
  "location": "Addtocart_test.opens_the_signin_page()"
});
formatter.result({
  "duration": 7829027300,
  "status": "passed"
});
formatter.match({
  "location": "Addtocart_test.click_on_cat_logo_and_select_one_of_them()"
});
formatter.result({
  "duration": 3340898400,
  "status": "passed"
});
formatter.match({
  "location": "Addtocart_test.add_product_to_the_cart_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 6109240300,
  "status": "passed"
});
});