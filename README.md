# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, unit testing is meant for testing small and discrete features not for monolithic ones like messaging.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume Yes, form testing would be a great place for unit tests as it is relatively simple to test it.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
The tests will be conducted without the Chromimum browser showing up. 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/#settings');
    await page.waitForTimeout(500);
  });

  if you want it to run before every test you would need to use beforeEach

  beforeEach(async () => {
    await page.goto('http://127.0.0.1:5500/#settings');
    await page.waitForTimeout(500);
  });

