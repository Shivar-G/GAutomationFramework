const {test, expect} = require('@playwright/test');





test.only('Login', async ({page})=>
{
   await page.goto("http://127.0.0.1:8000/g2g/login/");
   const element = page.locator('selector');
   await element.selectOption({value: '12'});
   await page.locator("(//span[@class='Select-arrow-zone'])[1]").click();
   await page.keyboard.type('Decemember');
   await page.waitForTimeout(2000);
   await page.keyboard.press('Enter');
   await page.locator("(#day").fill("27");
   await page.locator("(#year").fill("1975");
   await page.keyboard.type('British');
   await page.waitForTimeout(2000);
   await page.keyboard.press('Enter');
   await page.waitForTimeout(2000);
   await page.locator("#login-button").click();
   await page.waitForTimeout(35000);
   await page.locator("(//span[normalize-space()='Close'])[1]").click();
   await page.waitForTimeout(10000);
});
