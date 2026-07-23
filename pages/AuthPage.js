import {expect} from '@playwright/test';


class AuthPage{
    constructor(page){
        this.page = page;
        this.loginButton = page.locator("a[href='/login']");
        this.name = page.locator("input[name= 'name']");
        this.email = page.locator("[data-qa='signup-email']");
        this.signUp = page.getByRole('button',{name:'Signup'});
        // this.email= page.locator();

    }

    async openWebsite(){
        await this.page.goto("https://automationexercise.com");
    }
    async clickLogin(){
        await this.loginButton.click();

    }
    async enterName(item){
        await this.name.fill(item)
    }
    async enterEmail(item){
        await this.email.fill(item)
    }
    // async signUpButton(){
    //     await this.signUp.click();
    // }

    async signUpButtonUpdate(){
        await this.signUp.click();
    }
}
// stash making
export {AuthPage};