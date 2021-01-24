// Gallery page test 

describe('Gallery page test', () => {
    
    it('Go to Gallery', () => {
        cy.visit('http://localhost:8000');
        
        cy.get('div.menuIcons').find('a'). eq(2).click({force:true});  // gallery icon

        // check if the Gallery page has opened
        cy.get('div.gallery').should('exist');

        cy.title().should('eq', 'Gallery | Sania D Souza');
    })

    it('Check that atleast 1 Cloudinary image is visible', () => {
        cy.get('div[data-cy="gallery-image"]').its('length').should('gte', 1)
    })

    it('Check individual gallery image properties', () => {
        cy.get('div[data-cy="gallery-image"]').eq(0).within(() => {
            cy.get('div.gallery_image_overlay').should('exist');
        })
    })

})