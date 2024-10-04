// if

// if (condition){

// }

// if (true){
//       //---> code execute
// }

// if (false){
//     //----> code not execute
// }

const isUserloggedIn = true

// if (isUserloggedIn){
//      //----> this is a true statement
// }

// if( 3 != 2){

// }

// if(2 == "2") {
//     console.log("executed");   
// }

// if(2 === "2") {
//     console.log("executed");   
// }

// if(2 != 3) {
//     console.log("executed");   
// }

const tempreture = 41

// if ( tempreture === 41){
//     console.log("less than 50"); 
// }

// if ( tempreture === 40){
//     console.log("less than 50"); 
// } else {
//     console.log("tempreture is greter than 50");
// }

//const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("LESS than 750"); 
// } else if (balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1200");
    
// }


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard && 2 == 3){
//     console.log("Allow to buy Course");  
// }

// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("User Logged In");
// }

// ------------------------------------------------------------------------------------------------------------------------------

// Switch Case Statement:--

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//const month = 2

// switch (month) {
//     case 1:
//         console.log("January");
//         break;

//     case 2:
//         console.log("Feb");
//         // break;

//     case 3:
//         console.log("March");
//         break;

//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
        
//         break;
// }

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;

//     case "feb":
//         console.log("Feb");
//         break;

//     case "march":
//         console.log("March hai boss");
//         break;

//     case "april":
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
        
//         break;
// }

// truthy value:--

// const userEmail = ""

// if (userEmail) {
//     console.log("Got user Email");
// } else{
//     console.log("Don't have user email");
    
// }

//----------------------------------------------------------------------------------------------------------------------

//  Nullish Coalescing Operator (??): null Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
//  let val1 = null ?? 20 ?? 10
// val1 = null ?? undefined

// console.log(val1);

// Ternary Operator:--

// condition ? true : false -- syntax

const iceTeaprice = 100
let result = (iceTeaprice <= 80) ? "less than 80" : "more than 80"
console.log(result);


