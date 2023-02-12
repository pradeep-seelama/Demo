/// <reference types="cypress" />

import homePage from '../../pageObjects/homePage.cy'

describe('Home Page Basic validatations', () => {
  // This script validates Home page objects, Links and Title of the Page.
  // Any further new features of home page should add to this script.

  beforeEach(() => {
    cy.invoke_browser()
    // cy.accept_cookies()
  })
  it('Verify the page title', () => {
    cy.title().should('eq', 'ENSEK Energy Corp. - Candidate Test')
  })


  it('Verify the main Lables in Home Page', () => {
    const Texts = ['Home', 'About', 'Contact', 'Register', 'Log in', 'Find out more »', 'Buy energy »', 'Sell energy »', 'Learn more »'
    ]

    cy.get('a').each(($ele, index) => {
      cy.wrap($ele).should('have.text', Texts[index])
    })
  })

  it('Verify All the links in Home Page', () => {
    const Links = ['/', '/Home/About', '/Home/Contact', '/Account/Register', '/Account/Login', 'https://www.ensek.com', '/Energy/Buy',
      '/Energy/Sell', '/Home/About']

    cy.get('a').each(($ele, index) => {
      cy.wrap($ele).should('have.attr', 'href', Links[index])
    })
  })

  it('Verify the Page Header Element', () => {
    homePage.verifyPageHeader()
  })

})