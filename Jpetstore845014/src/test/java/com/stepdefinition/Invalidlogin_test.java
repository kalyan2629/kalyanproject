package com.stepdefinition;

import com.pages.Invalid_login;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Invalidlogin_test {
	

	Invalid_login inv = new Invalid_login();
	@Given("^:Open the jpet website$")
	public void open_the_jpet_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		inv.url();
	}

	@When("^:opens the next login page$")
	public void opens_the_next_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
		inv.signinclick();
	}

	@Then("^:enter invalid username and invalid password$")
	public void enter_invalid_username_and_invalid_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		inv.user_name();
		inv.pass_word();
	}
	@Then("^:click on login click button$")
	public void click_on_login_click_button() throws Throwable
	{
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		inv.signinbutton();
		inv.closebrowser();
	}
		
	
}

