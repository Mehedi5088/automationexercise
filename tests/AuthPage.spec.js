import {test, expect} from '@playwright/test';
import {AuthPage} from '../pages/AuthPage';

test("Login Page",async ({page})=>{

    const auth = new AuthPage(page);
    await auth.openWebsite();
    await auth.clickLogin();
    await auth.enterName("mehedi");
    await auth.enterEmail("mhasan.egov@gmail.com");
    await auth.signUpButton();

    // page close
    await page.waitForTimeout(9000); 
    await page.close();
})