class PaginationPage {
  getHeading() {
    return cy.get(".is-size-3");
  }
  getSubHeading() {
    return cy.get("#sub_heading");
  }
  getContent() {
    return cy.get("#content");
  }
  getHeadingText(text) {
    switch (text) {
      case "Pagination":
        return this.getHeading();
      case "World City Populations 2022":
        return this.getSubHeading();
      case "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:":
        return this.getContent();
    }
  }
  getPreviousButton() {
    return cy.get("#previous");
  }
  getNextButton() {
    return cy.get("#next").click();
  }

  getButtons(button) {
    switch (button) {
      case "Previous":
        return this.getPreviousButton();
      case "Next":
        return this.getNextButton();
    }
  }

  getDisabledButton(next) {
   return next ? this.getNextButton().should('be.enabled') : this.getNextButton().should('be.disabled')
  }
  
  getCityImage(){
    return cy.get('.city_image')
  }
  getData(){
    return cy.get('.Pagination_pagBodyData__vG6oj > p')
  }
}

module.exports = PaginationPage;
