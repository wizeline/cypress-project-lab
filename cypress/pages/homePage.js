class homePage{
    elements ={

        // nav bar elements
        contactNavBtn : () =>  cy.get('[href="https://www.wizeline.com/contact/"] > .css-1vg1w8o'),
        aboutNavBtn : () =>  cy.get('[href=" https://www.wizeline.com/about-us/"] > .css-1vg1w8o'),
        workNavBtn : () => cy.get('[href="https://www.wizeline.com/offerings/"] > .css-1vg1w8o'),
        academyNavBtn : () => cy.get('[href="https://academy.wizeline.com/"] > .css-1vg1w8o'),
        wizeLoginNavBtn : () => cy.get('.css-4zvxj1 > [href="/login/wizeline"]'),
        applicantLoginNavBtn : () => cy.get('.css-4zvxj1 > [href="/login/linkedin"]'),
        
        //footer elements
        wizeLoginFooterBtn : () => cy.get('.css-1goxvja > [href="/login/wizeline"]'),
        applicantLoginFooterBtn : () => cy.get('.css-1goxvja > [href="/login/linkedin"]'),
        viewProjectFooterBtn : () => cy.get('.MuiButton-contained'),
        

    }
    verifyHomePageNavLoads(){

        // Verify nav bar elements are visible
        this.elements.contactNavBtn().should('be.visible')
        this.elements.aboutNavBtn().should('be.visible')
        this.elements.workNavBtn().should('be.visible')
        this.elements.academyNavBtn().should('be.visible')
        this.elements.wizeLoginNavBtn().should('be.visible')
        this.elements.applicantLoginNavBtn().should('be.visible')
        
        // Verify Footer elements are visible
    }
    verifyHomePageFooterLoads(){
        this.elements.wizeLoginFooterBtn().scrollIntoView().should('be.visible')
        this.elements.applicantLoginFooterBtn().scrollIntoView().should('be.visible')
        this.elements.viewProjectFooterBtn().scrollIntoView().should('be.visible')   
    }

}

module.exports = new homePage();