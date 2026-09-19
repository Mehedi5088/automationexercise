import {expect} from '@playwright/test';


class AuthPage{
    constructor(page){
        this.page = page;
        this.name = page.locator("input[id= 'user-name']");
        this.password = page.locator("input[id= 'password']");
        // this.loginButton = page.locator("input[id= 'login-button']");
         this.loginButton = page.getByRole('button', { name: 'Login' });


    }

    async openWebsite(){
        // await this.page.goto("https://automationexercise.com");
        await this.page.goto("https://www.saucedemo.com/");
        // create a function for window maximize
        await this.page.setViewportSize({ width: 1920, height: 1080 });
    }

    async enterName(item){
        await this.name.fill(item)
    }
    async enterPassword(item){
        await this.password.fill(item)
        await this.loginButton.hover();
    }

    async signUpButtonUpdate(){
        await this.loginButton.click();
    }
}
export {AuthPage};