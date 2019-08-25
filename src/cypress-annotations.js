/**
 * Annotation for getting HTML-element by passing the selector to the Cypress.get-function
 */
export const Element = (selector) => {

    return (target, name, descriptor) => {

        return {
            get: function () {
                return cy.get(selector)
            }
        }
    }
}
