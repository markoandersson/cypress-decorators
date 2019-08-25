# Cypress with Page-objects and Javascript decorators

Learning [Cypress](https://www.cypress.io/) and implementing tests with simple page objects using [Javascript decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators).

Enables Javascript decorators for Cypress by adding the required babel-plugins in `.babelrc`-file.

Uses decorators to initialize class fields which have been annotated with @Element-annotation and provided with Cypress selector.
The idea of decorators is the same than which is used for example in Java's Selenium-framework.

Cypress tests are located [here](cypress/integration)

## Running

1. ```npm install```

2. Run in interactive mode: `npx cypress open` or run in headless-mode: `npx cypress run`
