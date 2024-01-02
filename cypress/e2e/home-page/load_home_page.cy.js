describe('Verify Home Page Functionality', () =>{
   it('Verify that the WizeLab home page properly loads' , () =>{
       cy.visit('/');


       // Verify h1
        cy.get('h1').eq(0)
           .invoke('text')
           .should('equal', 'Our personal experience')
      
       cy.get('h1').eq(1)
           .invoke('text')
           .should('equal', 'What you’ll get if you join?')


       cy.get('h1').eq(2)
           .invoke('text')
           .should('equal', 'Join us')
      
       // Verify buttons href value
       cy.get('a').get('[href="/login/wizeline"]')
       cy.get('a').get('[href="/login/linkedin"]')
       cy.get('a').get('[href="/internshipProjects"]')
   })   
})
