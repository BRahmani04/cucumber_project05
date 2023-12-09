const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const PaginationPage = require("../../pages/PaginationPage");

const pagination = new PaginationPage()



Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
    pagination.getHeadingText(heading).should('have.text', heading)
});


Then(/^the user should see the "([^"]*)" paragraph$/, (content) => {
	pagination.getHeadingText(content).should('have.text', content)
});


Then(/^the user should see the "([^"]*)" button is disabled$/, (button) => {
	pagination.getButtons(button).should('be.disabled')
});


Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	pagination.getButtons(button).should('be.enabled')
});


When(/^the user clicks on the "([^"]*)" button$/, (next) => {
        pagination.getButtons(next).click()
});

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (next) => {
	pagination.getButtons(next).then((button) => {
        const clickButton = () => {
            if(button.is(':enabled')) {
                button.click()

                pagination.getNextButton().then((nextButton) => {
                    if(nextButton.is(':enabled')){
                        clickButton()
                    }
                })
            }
        }
        clickButton()
})
});


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (arg, dataTable) => {
	pagination.getCityImage().should('have.attr', 'alt', arg)
    
    const arr = dataTable.rawTable.flat()
    pagination.getData().each(($el,index) => {
        cy.wrap($el).should('have.text', arr[index])
    })
});



