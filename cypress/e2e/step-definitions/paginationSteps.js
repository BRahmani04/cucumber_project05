const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const PaginationPage = require("../../pages/PaginationPage");

const pagination = new PaginationPage()



Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
    pagination.getHeadingText(heading).should('have.text', heading)
});


Then(/^the user should see the "([^"]*)" paragraph$/, (content) => {
	pagination.getHeadingText(content).should('have.text', content)
});


Then(/^the user should see the "([^"]*)" button is disabled$/, (previous) => {
	pagination.getButtons(previous).should('be.disabled')
});


Then(/^the user should see the "([^"]*)" button is enabled$/, (next) => {
	pagination.getButtons(next).should('be.enabled')
});


When(/^the user clicks on the "([^"]*)" button$/, (next) => {
        pagination.getButtons(next)
});

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (next) => {
	pagination.getDisabledButton(next)
});


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (arg, dataTable) => {
	pagination.getCityImage().should('have.attr', 'alt', arg)
    
    const arr = dataTable.rawTable.flat()
    pagination.getData().each((el,index) => {
        cy.wrap(el).should('have.text', arr[index])
    })
});



