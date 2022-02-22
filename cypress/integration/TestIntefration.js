//import { mobileReplenishment } from "../support/Pages/MobileReplenishment";
//import { basePage } from "../support/Pages/basePage";

it('Example sending Get request', () => {
   cy.request('https://next.privat24.ua')
      .then((response)=>{
           console.log(responce); 
      })
});

it('Example sending Post request', () => {
    cy.request({
         method:
         url:
         body:
         headers:



    })
       .then((response)=>{
            console.log(responce); 
       })
 });