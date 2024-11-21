//iterations:----------

//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 1; i <=5; i++) {
//     console.log("Code Executed"); 
// }
// console.log("loop closed");

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(i)

// }

// for (let i = 0; i <= 10; i++) {
//   console.log( `Outer loop value: ${i}` )

//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and Inner loop value ${i}`); 
//   } 
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`)

//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + ' = ' + i * j);

//     }

// }

// Array using loop:--

//let myArr = ["Flash", "batman", "superman"]

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);

// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`value of i is ${index}`);
// }


// *******************************************************************************************************************************

//While and do While loop

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2

// }

// let myArray = ["Flash", "batman", "Superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// do While loop

//let score = 1
//while (score <= 10);

// let score = 11

// do {
//     console.log(`score is ${score}`);

// } while (score <= 10);

// For...Of Loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);

}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);

}

// Map:-------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('UK', "United Kingdom")
// map.set('IN', "India")
//console.log(map);

// for (const key of map) {
//     console.log(key);

// }

// for (const [key, value] of map) {
//     console.log(key, ':-', value); 
// }

// for...in loop:----------------------

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Use For...in loop in Array:---------

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);

}

// For...Each loop in javascript:---------

// const coding = ["js", "ruby", "java", "paython", "cpp"]

// coding.forEach( function (val){
//     console.log(val); 
// } )

// coding.forEach( (item) => {
//    console.log(item);

// } )

//Another way to print:----

const coding2 = ["js", "ruby", "java", "paython", "cpp"]

function printMe(item) {
    //console.log(item); 
}

coding2.forEach(printMe);

const myCoding = [
    {
        langaugeName: "javascript",
        langaugeFileName: "js"
    },

    {
        langaugeName: "java",
        langaugeFileName: "java"
    },

    {
        langaugeName: "python",
        langaugeFileName: "py"
    }
]

myCoding.forEach((item) => {
    // console.log(item.langaugeName);
    // console.log(item.langaugeFileName);

});

const coding = ["js", "ruby", "java", "paython", "cpp"]

const value = coding.forEach((item) => {
    // console.log(item);
    return item

});
// console.log(value);

// Filter Method in javascript:---

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//    return num > 4
// })
// console.log(newNums);

// filter method using for..Each loop:----
// const newNums =[]

// myNums.forEach( (num) => {
//     if( num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }

];

let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter((bk) => { return bk.publish >= 2000 })

userBooks = books.filter((bk) => {
    return ((bk.publish >= 2000) && (bk.edition > 2008))
})
// console.log(userBooks);

// map method:------------------------

// const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => num + 10 )
// console.log(newNums);

// Chaining :-- Using multiple method at a time

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNum = myNumbers
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)
//      console.log(myNum);

// reduce Method in javascript:---------

// const myNum = [1, 2, 3]
// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
// console.log(myTotal);

// Through Arrow Function

const myNum = [1, 2, 3]

const myTotal = myNum.reduce( (acc, curr) => ( acc + curr ), 0)
// console.log(myTotal);

const shoppingCart = [
 
     {
        itemName: "js course",
        price: 2999
     },

     {
        itemName: "py course",
        price: 999
     },

     {
        itemName: "mobile dev course",
        price: 5999
     },

     {
        itemName: "Data science course",
        price: 12999
     },

]

 const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
 console.log(priceToPay);
 





