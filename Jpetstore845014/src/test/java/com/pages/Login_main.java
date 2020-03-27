package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import excelutility.Read_excelsheet;

public class Login_main {
	
	WebDriver driver;
	By signin=By.xpath("/html/body/div[1]/div[2]/div/a[2]");
	By username=By.name("username");
	By password=By.name("password");
	By login=By.name("signon");
	By signoff=By.xpath("/html/body/div[1]/div[2]/div/a[2]");
	
	
	
	public void url() throws InterruptedException 
		{
		System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://petstore.octoperf.com/actions/Catalog.action");
		System.out.println(driver.getTitle());
		Thread.sleep(4000);
		}
		public void homepage() throws InterruptedException
		{
			//clicks the signin button 
			Thread.sleep(3000);
			driver.findElement(signin).click();		
			
		}
		
	public void Jpet_username( int i  ) throws IOException
		{
		//Enters the valid username  from excelclass
			driver.findElement(username).clear();
		//	driver.findElement(username).sendKeys("kalyankuracha");
			Read_excelsheet read=new Read_excelsheet();
			driver.findElement(username).sendKeys(read.Excel_Username(i));
		}

	public void Jpet_password( int i ) throws IOException 
		{
		//Enters the valid password from excelclass
			driver.findElement(password).clear();
			//driver.findElement(password).sendKeys("kalyan123");
			Read_excelsheet read=new Read_excelsheet();
			driver.findElement(password).sendKeys(read.Excel_password(i));	
		}

		public void Login_click() throws InterruptedException 
		{
			//Clicks on login button
			driver.findElement(login).click();	
			Thread.sleep(4000);
			driver.findElement(signoff).click();
			Thread.sleep(2000);
			driver.findElement(signin).click();
		}
		public void close()
		{
			//closes the browser
			driver.close();
		}

}
