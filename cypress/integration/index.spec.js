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

    it('Check the contact section on hero area', () => {
        cy.get('div[data-cy="social-links-hero"]').find('a').should('have.length', 3);
    })

    it('Check for quick look blogs and projects', () => {
        cy.get('div.quicklookBlockBlog').its('length').should('gte', 2);
        cy.get('div.quicklookBlockProject').its('length').should('gte', 2);
    })

})