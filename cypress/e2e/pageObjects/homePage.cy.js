class homePage{
    elements = {
        buyEnergy: () => cy.get('[href="/Energy/Buy"]'),
        sellEnergy: () => cy.get('[href="/Energy/Sell"]'),
        aboutUs: () => cy.get('[href="/Home/About"]'),
        pageHeader:() => cy.get('.jumbotron'),
        // shortlist: () => cy.get('#shortlist'),
       

    }
    clickBuyEnergy(){
        this.elements.buyEnergy().click();
    }
    clickSellEnergy(){
        this.elements.buyEnergy().click();
    }
    clickAboutUs(){
        this.elements.buyEnergy().click();
    }
    verifyPageHeader(){
        this.elements.pageHeader().should('contain', 'ENSEK Energy Corp.');
    }
}

module.exports = new homePage();