/// <reference types="cypress" />
describe('Testing URL and Components',() =>{
    it('Testing the URL',() =>{
        cy.visit('http://localhost:3000');
        cy.url().should('include','http://localhost:3000');
    })
    it('Testing Director Component',() =>{
        cy.visit('http://localhost:3000');
        cy.contains('Director Component').should('exist');
        cy.get('[data-testid=directorName]').should('exist').type('I am Director Name');
        cy.get('[data-testid=directorPosition]').should('exist').type('I am Director Position');
        cy.get('[data-testid=directorButton]').click();
        cy.contains('Name:I am Director Name').should('exist');
        cy.contains('Position:I am Director Position').should('exist');
    });

    it('Testing Employee Component',() =>{
        cy.visit('http://localhost:3000');
        cy.contains('Employee Component').should('exist');
    });

    it('Testing Product Component',() =>{
        cy.visit('http://localhost:3000');
        cy.contains('Product Component').should('exist');
    });
});