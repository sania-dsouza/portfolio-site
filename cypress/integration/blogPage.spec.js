// Blog page test 

describe('Blog page test', () => {
    
    it('Go to Blog', () => {
        cy.visit('http://localhost:8000');
        
        cy.get('div.menuIcons').find('a'). eq(1).click({force:true});  // blog icon

        // check if the Blog page has opened
        cy.get('div.blockWrapper').should('exist');

        cy.title().should('eq', 'Reading | Sania D Souza');
    })

    it('Check that atleast 1 Medium blog post is visible', () => {
        cy.get('div.block').its('length').should('gte', 1)
    })

    it('Check individual blog block properties', () => {
        cy.get('div.block').eq(0).within(() => {
            cy.get('div[data-cy="blog-title"]').should('exist');
            cy.get('div[data-cy="blog-subtitle"]').should('exist');
            cy.get('[data-cy="blog-link"]').should('exist');
        })
    })

})