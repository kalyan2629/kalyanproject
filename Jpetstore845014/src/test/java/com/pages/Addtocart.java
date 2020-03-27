package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import excelutility.Read_excelsheet;

public class Addtocart {

	WebDriver driver;
	
	By signin=By.xpath("/html/body/div[1]/div[2]/div/a[2]");
	By username=By.name("username");
	By password=By.name("password");
	By login=By.name("signon");
	By catimage=By.xpath("//area[@coords=\'225,240,295,310\']");
	By itemid=By.xpath("//a[@href=\'/actions/Catalog.action?viewProduct=&productId=FL-DLH-02\']");
	By addcart=By.xpath("//a[@href=\'/actions/Cart.action?addItemToCart=&workingItemId=EST-16\']");
	By updatecart=By.xpath("//input[@name='updateCartQuantities']");
	By pay=By.xpath("//a[@href='/actions/Order.action?newOrderForm=']");
	By addressnext=By.xpath("/html/body/div[2]/div/form/input");
	By confirm=By.xpath("//a[@href='/actions/Order.action?newOrder=&confirmed=true']");
	By finalstep=By.xpath("/html/body/div[2]/ul/li");
	
	
	public void url() throws InterruptedException
	{
		//Initialize the webdriver and open website in browser
		System.setProperty("webdriver.chrome.driver","drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://petstore.octoperf.com/actions/Catalog.action");
		Thread.sleep(4000);
	}

	 public void signinclick() throws InterruptedException
	   {
		 //clicks the signin button 
		   driver.findElement(signin).click();
		   Thread.sleep(2000);
	   }
	 
	 public void Jpet_username() throws IOException
		{
		 //Enters the valid username  from excelclass
			driver.findElement(username).clear();
		//	driver.findElement(username).sendKeys("kalyankuracha");
			Read_excelsheet read=new Read_excelsheet();
			driver.findElement(username).sendKeys(read.Excel_Username(0));
		}

	   public void Jpet_password() throws IOException 
		{
		//Enters the valid password from excelclass
			driver.findElement(password).clear();
			//driver.findElement(password).sendKeys("kalyan123");
			Read_excelsheet read=new Read_excelsheet();
			driver.findElement(password).sendKeys(read.Excel_password(0));	
		}

		public void Login_click() throws InterruptedException 
		{
			//Clicks on login button
			driver.findElement(login).click();	
			Thread.sleep(4000);
		}
		
		public void addto_cart() throws InterruptedException
		{
			//Adds the product into cart
			driver.findElement(catimage).click();
			driver.findElement(itemid).click();
			driver.findElement(addcart).click();
			driver.findElement(updatecart).click();
			driver.findElement(pay).click();
			Thread.sleep(1000);
		}
		
		public void confirmation() throws InterruptedException
		{
			//Clicks on confirmation of address and proceed to pay
			driver.findElement(addressnext).click();
			driver.findElement(confirm).click();
			String s=driver.findElement(finalstep).getText();
			System.out.println(s);
		    Thread.sleep(5000);
		}
		
		public void closebrowser() 
		{
			//Closes the browser
			driver.close();
		}
	 
}
