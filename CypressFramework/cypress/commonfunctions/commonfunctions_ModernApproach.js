export const clickOnElement = (ele) =>{

    let element = cy.get(ele)
    element.click()
}

export const clickOnElementWithContains = (webElementLocation) =>{
    let element = cy.contains(webElementLocation)
    element.click()
 } 

 export const typeInElement = (value, webElementLocation) =>{
    let typeElement = cy.get(webElementLocation)
    typeElement.clear()
    typeElement.type(value)
 }

 export const elementShould = (webElementLocation, shouldMatch) =>{
    let element = cy.get(webElementLocation)
    element.should(shouldMatch)
 }

 export const elementShouldWithContains = (webElementLocation, shouldMatch) => {
    let element = cy.contains(webElementLocation)
    element.should(shouldMatch)
 }

 //import 'cypress-file-upload' you will need this added if you want to use this function
 export const upload_file = (webElement,filename)=> {
  let input_ele =cy.get(webElement)
  input_ele.attachFile(filename)
 }

 export const validate_page_url = (page,path) => {
  cy.url().then(($url) => {
     if($url.includes(path)) {
         cy.log("navigated to "+page)
     }else{
         cy.log("unable to navigate to "+page)
     } 
})
}

 
