/// <reference types="cypress" />

import testData from '../../../fixtures/testData.json'
import signInPage from '../../pageObjects/signInPage.cy'
import homePage from '../../pageObjects/homePage.cy'

describe('sign in page test', () => {
    // This script validates Login functionality.
    // Any further new features of Login page should add to this script.

    beforeEach(() => {
        cy.invoke_browser()
        // cy.accept_cookies()
    })

    it('verify signin', () => {
        signInPage.clickLoginLink();
        signInPage.typeUsername(testData.email);
        signInPage.typePassword(testData.pass);
        signInPage.clickLoginButton();

    })

})