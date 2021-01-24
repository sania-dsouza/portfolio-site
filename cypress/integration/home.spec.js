// Home page test 

describe('Home page test', () => {
    
    it('Launch site', () => {
        cy.visit('http://localhost:8000');
        cy.title().should('eq', 'Home | Sania D Souza');
    })

    it('Check the Github link for project', () => {
        cy.get('a[data-cy="projectLink"]').should('have.attr', 'href').and('include', 'https://github.com/sania-dsouza');
    })

    it('Check the social links on the footer', () => {
        cy.get('span[data-cy="social-links"]').find('a').should('have.length', 3);
    })

    it('Check the presence of three location info dialogs', () => {
        cy.get('div[data-cy="info-dialog"]').should('have.length', 3);
    })

})