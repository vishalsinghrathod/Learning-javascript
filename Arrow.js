const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);

// }
// chai()

// Arrow function Syntax

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() -- undefined


// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1 , num2) => {
//   return num1 + num2
// }
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2, num3) => num1 +
//     num2 + num3

// console.log(addTwo(3, 4, 3));

// const addTwo = (num1, num2) => (
//     num1 + num2
// )
// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username: "vishal"})
console.log(addTwo())