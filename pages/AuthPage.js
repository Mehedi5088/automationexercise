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
<<<<<<< HEAD
// test script
//conflict check
<<<<<<< HEAD
<<<<<<< HEAD
// mehedi2 confilict
//conflict catch
// 3rd try
// mehedi3 conflict
// test conflict
=======
>>>>>>> 4dc6ff9 (mehedi2)
=======
// mehedi2 confilict
// mehedi2 again
>>>>>>> 772e755 (dsfsd)
=======

>>>>>>> 4e654c7 (making conflict)
export {AuthPage};