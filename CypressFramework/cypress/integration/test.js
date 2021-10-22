import * as common_function from '../commonfunctions/commonfunctions_ModernApproach'

describe('A test file to make sure cypress is working', () => {
    
    beforeEach(() => {
    //add any setting/configuration you want before test run starts.
    })
  
    it('Navigate to my github page and validate the url and my description', () => {

        cy.visit(Cypress.env('base_url'));
        common_function.validate_page_url("My github page",Cypress.env('profile_path'))
        common_function.elementShouldWithContains(Cypress.env('job_title'),'exist')
    })

})   