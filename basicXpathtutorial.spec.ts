import {test} from "@playwright/test";

test ('Tutorial BasicXpath', async({page}) =>{
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator("//label[text()='Username']").fill('yuvarani.sekar@testleaf.com');
    await page.locator("//input[@id='Login']").click()
    await page.locator("//label[text()='Password']").fill('TestLeaf@2028');
    await page.locator("//input[@id='Login']").click();
    await page.pause(); 
})