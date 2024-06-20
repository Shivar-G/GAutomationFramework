const {test, expect} = require('@playwright/test');





test('Login', async ({page})=>
{
   await page.goto("http://127.0.0.1:8000/g2g/login/");
   await page.locator("(//span[@class='Select-arrow-zone'])[1]").click();
   await page.keyboard.type('Decemember');
   await page.waitForTimeout(2000);
   await page.keyboard.press('Enter');
   await page.locator("(//input[@type='text'])[2]").fill("27");
   await page.locator("(//input[@type='text'])[3]").fill("1975");
   await page.locator("(//span[@class='Select-arrow'])[2]").click();
   await page.keyboard.type('British');
   await page.waitForTimeout(2000);
   await page.keyboard.press('Enter');
   await page.waitForTimeout(2000);
   await page.locator("(//button[normalize-space()='Login'])[1]").click();
   await page.waitForTimeout(35000);
   await page.locator("(//span[normalize-space()='Close'])[1]").click();
   await page.waitForTimeout(10000);
   await page.locator("(//a[normalize-space()='Joey Byford'])[1]").click();
   await page.waitForTimeout(15000);
});