// Projects page test 

describe('Projects page test', () => {
    
    it('Go to Projects', () => {
        cy.visit('http://localhost:8000');
        
        cy.get('div.menuIcons').find('a'). eq(0).click({force:true});  // projects icon

        // check if the Projects page has opened
        cy.get('div.projBlockWrapper').should('exist');

        cy.title().should('eq', 'Projects | Sania D Souza');
    })

    it('Check that atleast 1 Github linked project blocks is visible', () => {
        cy.get('div.projBlock').its('length').should('gte', 1)
    })

    it('Check individual project block properties', () => {
        cy.get('div.projBlock').eq(0).within(() => {
            cy.get('div[data-cy="project-title"]').should('exist');
            cy.get('div[data-cy="project-description"]').should('exist');
            cy.get('div[data-cy="project-indiv-link"]').should('exist');
        })
    })

})