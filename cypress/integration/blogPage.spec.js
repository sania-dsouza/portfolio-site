// Blog page test 

describe('Blog page test', () => {
    
    it('Go to Blog', () => {
        cy.visit('http://localhost:8000');
        
        cy.get('#blogButton').should('exist')  // blog icon

        cy.get('#blogButton').click();

        // check if the Blog page has opened
        cy.get('div.blockWrapper').should('exist');

        cy.title().should('eq', 'Blog | Sania D Souza');
    })

    it('Check that atleast 1 Medium blog post is visible', () => {
        cy.get('div.blockWrapper').its('length').should('gte', 1)
    })

    it('Check individual blog block properties', () => {
        cy.get('div.quicklookBlockBlog').eq(0).within(() => {
            cy.get('div.blogText').should('exist');
            cy.get('div.blogTitle').should('exist');
        })
    })

})