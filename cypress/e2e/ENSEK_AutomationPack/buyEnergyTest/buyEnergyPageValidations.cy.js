/// <reference types="cypress" />
import homePage from '../../pageObjects/homePage.cy'
import buyPage from '../../pageObjects/buyPage.cy'

describe('Buy energy Page Basic validatations', () => {
    // This script validates E2E to Gas Purchasing functionality  
    // Validate Balance Quantity post purchase
    // Validate Reset option functionality
    // Any further new features of Gas Purchase functionality should add to this script.

    beforeEach(() => {
        cy.invoke_browser()
        homePage.clickBuyEnergy()
        // cy.accept_cookies()
    })
    it('Verify the page title', () => {
        cy.title().should('eq', 'Buy - Candidate Test')
    })

    it('Verify the updated quantity after buy', () => {
        let purchaseQuantiy = 50
        buyPage.verifyTheUpdatedvalue(purchaseQuantiy)
    })
    it('Verify the RESET functionality', () => {
        buyPage.clickResetButton()
        buyPage.verifyDefaultGasQunatity()

    })
})