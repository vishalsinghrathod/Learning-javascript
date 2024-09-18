
// console.log("V")
// console.log("I")
// console.log("s")
// console.log("H")
// console.log("A")
// console.log("L")

function sayMyName() {
    console.log("V")
    console.log("I")
    console.log("s")
    console.log("H")
    console.log("A")
    console.log("L")
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)  


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

//const result =  addTwoNumbers(3, 5)  
//console.log("Result:", result)

function addTwoNumbers(number1, number2) {
//    let sum = number1 + number2
//    return sum

    return number1 + number2
    
}
const result =  addTwoNumbers(3, 5)  
//console.log("Result:", result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// const message = loginUserMessage("vishal")
// console.log(message)

// console.log(loginUserMessage("Hitesh"));

function loginUserMessage(username){

 if(username === undefined){
    console.log("Please enter a username")
    return
 }

    return `${username} just logged in`
}

//console.log(loginUserMessage())

function calculatecartprice(num1){
    return num1
}

//console.log(calculatecartprice(200, 400, 500, 2000))

// By Using Rest Operator

function calculatecartprice(...num1){
    return num1
}

//console.log(calculatecartprice(200, 400, 500, 2000))

function calculatecartprice(val1, val2, ...num1){
    return num1
}

//console.log(calculatecartprice(200, 400, 500, 2000))

//Object To Function

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600])); //shorthand method