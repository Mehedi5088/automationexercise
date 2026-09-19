import {test, expect} from '@playwright/test';
import {AuthPage} from '../pages/AuthPage';

test("Login Page",async ({page})=>{

    const auth = new AuthPage(page);
    await auth.openWebsite();
        await page.waitForTimeout(3000); 
    // await auth.clickLogin();
    await auth.enterName("standard_user");
        await page.waitForTimeout(3000); 
    await auth.enterPassword("secret_sauce");
    // await auth.signUpButtonUpdate();

    // page close
    await page.waitForTimeout(9000); 
    // await page.close();
})