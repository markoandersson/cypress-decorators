import {Element} from './cypress-annotations'

/**
 * Page object which presents the Google search page
 */
class GooglePage {

    @Element('input[name="q"]')
    searchField

    @Element('#pnnext')
    nextPageButton

    goTo() {
        cy.visit('https://google.com')
    }

    search(query) {
        this.searchField.type(`${query}{enter}`)
    }

    nextPage() {
        this.nextPageButton.click()
    }

    shouldContainSearchResult(title) {
        cy.get('h3').contains(title)
    }
}

export default GooglePage

