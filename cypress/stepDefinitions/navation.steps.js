import {Given} from '@badeball/cypress-cucumber-preprocessor';

Given('user navigates to Google page', () => {
    cy.visit("/");
});