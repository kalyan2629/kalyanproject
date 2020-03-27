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
  "duration": 17849298100,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BOE9VS2\u0027, ip: \u0027192.168.43.149\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_242\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F50C83+1707139]\n\tOrdinal0 [0x00EB68F1+1075441]\n\tOrdinal0 [0x00E2DE72+515698]\n\tOrdinal0 [0x00E27CA8+490664]\n\tOrdinal0 [0x00E2839B+492443]\n\tOrdinal0 [0x00E292F5+496373]\n\tOrdinal0 [0x00E24F05+478981]\n\tOrdinal0 [0x00E2ECA0+519328]\n\tOrdinal0 [0x00DDCA67+182887]\n\tOrdinal0 [0x00DDBDDD+179677]\n\tOrdinal0 [0x00DD9D4B+171339]\n\tOrdinal0 [0x00DC1D4A+73034]\n\tOrdinal0 [0x00DC2DC0+77248]\n\tOrdinal0 [0x00DC2D59+77145]\n\tOrdinal0 [0x00ECBB67+1162087]\n\tGetHandleVerifier [0x00FEA966+508998]\n\tGetHandleVerifier [0x00FEA6A4+508292]\n\tGetHandleVerifier [0x00FFF7B7+594583]\n\tGetHandleVerifier [0x00FEB1D6+511158]\n\tOrdinal0 [0x00EC402C+1130540]\n\tOrdinal0 [0x00ECD4CB+1168587]\n\tOrdinal0 [0x00ECD633+1168947]\n\tOrdinal0 [0x00EE5B35+1268533]\n\tBaseThreadInitThunk [0x759D6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x770E7B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x770E7B44+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:531)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.pages.Registration_page.url(Registration_page.java:40)\r\n\tat com.stepdefinition.Registration_test.enter_user_ID_and_password(Registration_test.java:17)\r\n\tat ✽.Given Enter user ID and password(src/main/resources/feature/testcase.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Registration_test.add_the_account_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Registration_test.save_the_account_inforamtion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Registration_test.complete_the_registration()"
});
formatter.result({
  "status": "skipped"
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
