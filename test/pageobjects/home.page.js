import BasePage from "./Base.page";

class HomePage extends BasePage {

    get homePageLogo(){
        return $('#splash');
    }
    get loginTab(){
        return $$('.float-right')[5];
    }
    get userPic(){
        return $('.float-right.roster-pic');
    }

}

export default new HomePage();
