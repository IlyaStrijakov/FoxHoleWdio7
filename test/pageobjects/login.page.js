import BasePage from "./Base.page";

class LoginPage extends BasePage {

    get logInHeader() {
        return $('.display-4');
    }
    get usernameLabel () {
        return $$('.display-7.text-white')[0];
    }
    get usernameField(){
        return $('#mat-input-0');
    }
    get passwordLabel () {
        return $$('.display-7.text-white')[1];
    }
    get passwordField(){
        return $('#mat-input-1');
    }
    get logInBtn (){
        return $('.btn-danger');
    }
    get supportText(){
        return $$('.mt-1.text-white.display-8')[0];
    }
    get signIn(){
        return $$('a[href="#/register"]')[1];
    }
    get termsOfService(){
        return $('a[href="https://pilled.blob.core.windows.net/general/TERMS OF USE.pdf"]');
    }
    get privacyPolicy(){
        return $('a[href="https://pilled.blob.core.windows.net/general/PRIVACY POLICY.pdf"]');
    }
    get forgotPasswordOrUsername (){
        return $$('.mt-1.text-white.display-8')[1];
    }
    get supportIssuesText (){
        return $$('.mt-1.text-white.display-8')[2];
    }
    login (username, password) {
        this.usernameField.setValue('AutoTestQA');
        this.passwordField.setValue('Qwerty8387');
        this.logInBtn.click();
    }
    open () {
        return super.open("/#/login");
    }

}

export default new LoginPage();
