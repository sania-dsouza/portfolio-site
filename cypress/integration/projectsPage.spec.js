// Projects page test 

describe('Projects page test', () => {
    
    it('Go to Projects', () => {
        cy.visit('http://localhost:8000');
        
        cy.get('#projectsButton').should('exist')  // projects icon

        cy.get('#projectsButton').click();
        
        // check if the Projects page has opened
        cy.get('div.projBlockWrapper').should('exist');

        cy.title().should('eq', 'Projects | Sania D Souza');
    })

    it('Check that atleast 1 Github linked project blocks is visible', () => {
        cy.get('div.quicklookBlockProjectPage').its('length').should('gte', 1)
    })

    it('Check individual project block properties', () => {
        cy.get('div.quicklookBlockProjectPage').eq(0).within(() => {
            cy.get('div[data-cy="project-title"]').should('exist');
            cy.get('span.tag').its('length').should('gte', 1);
        })
    })

})