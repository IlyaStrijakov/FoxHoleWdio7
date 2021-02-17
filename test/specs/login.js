import HomePage from '../pageobjects/home.page';
import LoginPage from  '../pageobjects/login.page';

describe('Login User', () => {
    it('Should login with valid credentials', () => {
        HomePage.open("");
        HomePage.loginTab.click();
        browser.pause(2000);
        LoginPage.login('AutoTestQA', 'Qwerty8387');
        browser.pause(2000);
        expect(HomePage.userPic.isDisplayed()).toEqual(true);
    });
});


