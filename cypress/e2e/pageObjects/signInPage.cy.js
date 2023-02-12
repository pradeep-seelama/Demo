class signInPage{

    elements = {
        logInLink: () => cy.get('#loginLink'),
        userInput: () => cy.get('#Email'),
        passwordInput: () => cy.get('#Password'),
        loginButton: () => cy.contains('Log in'),
        errorHeader:() =>cy.get('h1.text-danger')
        
    }

    typeUsername(username){
        this.elements.userInput().type(username);
    }
    typePassword(password){
        this.elements.passwordInput().type(password);
    }
    clickLoginLink(){
        this.elements.logInLink().click();
    }
    clickLoginButton(){
        this.elements.loginButton().click();
    }
    clickForgotPassword(){
        this.elements.forgotPassword().click();
    }
    verifyTheErrorMessage(){
        this.elements.errorHeader().should('contain','Error')
    }
}
module.exports = new signInPage();