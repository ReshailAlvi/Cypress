/// <reference types="cypress" />

class commonfunctions{

   
    static clickOnElement(webElementLocation){
        let element = cy.get(webElementLocation)
        element.click()
     }
    
    static clickOnElementWithContains(webElementLocation){
        let element = cy.contains(webElementLocation)
        element.click()
     } 
     
  
     static typeInElement(value, webElementLocation){
        let typeElement = cy.get(webElementLocation)
        typeElement.clear()
        typeElement.type(value)
     }
  
     static elementShould(webElementLocation, shouldMatch){
        let element = cy.get(webElementLocation)
        element.should(shouldMatch)
     }

     static elementShouldWithContains(webElementLocation, shouldMatch){
        let element = cy.contains(webElementLocation)
        element.should(shouldMatch)
     }


     static upload_file(webElement,filename){
      let input_ele =cy.get(webElement)
      input_ele.attachFile(filename)
     }

     static validate_page_url(page,path){
      cy.url().then(($url) => {
         if($url.includes(path)) {
             cy.log("navigated to "+page)
         } else  {
            cy.log("unable to navigate to "+page)
         }
     })

     }
}

export default commonfunctions;