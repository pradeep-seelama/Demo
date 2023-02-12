class buyPage{
    elements = {
        buyEnergyLabel: () => cy.get('.container body-content'),
        reset: () => cy.contains('Reset'),
        gasQuantity: () => cy.get("tbody > :nth-child(1) > :nth-child(5)") ,
        gasAmountPurchased :()=> cy.get('#energyType_AmountPurchased'),
        gasBuy :()=>cy.get(':nth-child(1) > :nth-child(7) > .btn'),
        saleConfirmation :() => cy.get('h2'),
        saleConfirmationBody :() => cy.get('.well'),
        buyMore :()=>cy.contains('Buy more »')
    }

    verifyBuyEngergyLabel(){
        this.elements.buyEnergyLabel().should('contain', 'Buy Energy');
    }
    clickResetButton(){
        cy.log('Reseting the all records')
        this.elements.reset()
        .should('contain', 'Reset')
        .click();
    }

    clickByLocationLink(){
        this.elements.byLocationLink().click();
    }
    verifyTheUpdatedvalue(quantity){

        this.elements.gasQuantity().then(($ele) => {
        const beforeQuantity = $ele.text()
        cy.log('Gas Quantity Before purchase is ',beforeQuantity)
        this.elements.gasAmountPurchased().type(quantity)
        this.elements.gasBuy().click()
        const afterQuanity =beforeQuantity-quantity
        cy.log('Gas Quantity suppose to be after purchase is ',afterQuanity)
        this.elements.saleConfirmation().should('contain', 'Sale Confirmed!');
        cy.log('Verify the purchase quantity')    
        this.elements.saleConfirmationBody()
        .should('contain', quantity)
        .should('contain', afterQuanity)
        cy.log('Click on the buymore to navigate to Buy table')
        this.elements.buyMore().click()
        cy.log('Varify the latest gas quantity')
        this.elements.gasQuantity().should('text',afterQuanity) 
    })
  }
  verifyDefaultGasQunatity(){
    cy.log('Making sure that default quantity set to 3000')
    this.elements.gasQuantity().should('text','3000') 
  }
}
module.exports = new buyPage();