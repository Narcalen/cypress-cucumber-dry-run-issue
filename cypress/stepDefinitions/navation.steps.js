import {Given} from '@badeball/cypress-cucumber-preprocessor';
import 'cypress-network-idle'

Given('user navigates to Google page', () => {
    cy.visit("/");
    cy.waitForNetworkIdle("/", 1000)
});