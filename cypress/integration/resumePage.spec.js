// Resume test 

describe('Resume redirect test', () => {
    
    it('Check the resume redirect', () => {
        cy.visit('http://localhost:8000');
        
        cy.get('div.menuIcons').find('a'). eq(3).should('have.attr', 'href').and('contain', '/drive.google.com/');
    })

})