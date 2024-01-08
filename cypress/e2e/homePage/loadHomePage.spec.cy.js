import homePage from "../../pages/homePage"

describe('Verify Home Page Functionality', () =>{
    before('Navigate to the WizeLab home page' , () =>{
        cy.visit('/');
    })

    it('Verify that the home page properly loads' , () =>{

        homePage.verifyHomePageNavLoads()
        homePage.verifyHomePageFooterLoads()
        
   })   
})
