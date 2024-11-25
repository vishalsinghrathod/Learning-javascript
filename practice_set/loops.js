
// for loop:----------------

// for (let i = 1; i <= 10; i++) {

//     // console.log(i);
// }

// for (let i = 5; i <= 5; i++) {

//     for (let j = 1; j <= 10; j++) {

//         // console.log(` ${i + '*' + j} = ${i * j}`);
//         // console.log(`${i} * ${j} = ${i*j}`);
//         // console.log(i, "*" ,j, "=", i*j);


//     }
// }

// for (let i = 1; i <= 20; i++) {

//     if (i % 2 !== 0) {
//         //    console.log(i);

//     }

// }

// let user = 9;

// if( user % 2 === 0){
//     console.log("this is a even number");  
// } else {
//     console.log("this is a odd number");

// }

// for (let i = 1; i <= 10; i++) {

//     // console.log( `${i} = ${i*i}`);
//     // console.log( i, "=", i**2); 
// }

// let fruite = ["apple", "banana", "cherry", "date"]

// for (let index = 0; index < fruite.length; index++) {

//     let food = fruite[index]
//     console.log(food);

// }

// const myArr = [2, 4, 6, 8, 10]

// for (let i = 0; i < myArr.length; i++) {

//     let num = myArr[i]
//     console.log((num) * (num));

// }

// for (let i = 10; i >= 0; i--) {

//     // console.log(i);

// }

// let myArr1 = [12, 45, 67, 89, 23]

// for (let index = 0; index < myArr1.length; index++) {

//     //    if (myArr1[index] > 50) {
//     //     console.log(myArr1[index]);
//     //    } 

// }

// let name = "javascript"
// let name2 = Array.from(name)

//  for (let index = 0; index < name2.length; index++) {
//     console.log(name2[index]);  
//  }

// let sum = 0;

// for (let i = 1; i <=20; i++) {

//     if( i % 2 !== 0 ){

//     sum = sum + i;
//     }
// }
// console.log(sum);

// let myArray = [2, 4, 6, 8, 10]
// let newArray = []

// for (let index = 0; index < myArray.length; index++) {

//   let mymulti = myArray[index] * 3

//     // console.log(mymulti * 3);

//     newArray.push(mymulti)
// }
// console.log(newArray);

// let arr = [
//     [1, 2, 3],

//     [4, 5, 6],

//     [7, 8, 9],

// ]

// let myArray = arr.flat(Infinity)
// console.log(myArray);


// for (let index = 0; index < myArray.length; index++) {

//     console.log(myArray[index])
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {

//         // console.log(`${i  + '*' +  j} = ${i * j} `);

//     }
// }



// while loop:-----------

// let i = 0;
// while (i <= 10) {
//     // console.log(i);
//     i++;

// }

// let myArr4 = [5, 10, 15, 20]
// let index = 0;
// while (index < myArr4.length) {
//     console.log(myArr4[index]);
//     index++;
// }

// let sum = 0
// let i = 1;

// while (i <= 10) {
//     // console.log(i);
//     sum = sum + i;
//     i++

// }
// console.log(sum);

// let i = 1;
// while (i <= 10) {
//     if( i % 2 !== 0 ){
//         console.log(i);

//     }
//     i++;
// }

// let str = "Beginner"
// let myArr = Array.from(str)
// let index = 0;
// while (index < myArr.length) {
//     console.log(myArr[index]);
//     index++
// }

// let i = 1;
// while (i <= 50) {
//     if(i % 5 ===0){
//         console.log(i);

//     }
//     i++
// }

// let myArr = [12, 22, 32, 4, 5, 6]
// let i = 0;
// while (i < myArr.length) {
//     if(myArr[i] % 2 ===0){
//         console.log(myArr[i]);

//     }
//     i++
// }

// do..while loop in javascript:---------

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// let i = 1;
// let sum = 0;
// do {
//     sum = sum + i;
//     // console.log(i);
//     i++

// } while (i <= 50);
// console.log(sum);

// let i = 2;
// do {
//     if(i % 2 == 0){
//         console.log(i);

//     }
//     i++
// } while (i <= 20);

// let i = 10;
// do {
//     console.log(i);
//     i--
// } while (i >= 1);

// for...of loop in javascript:---------------------

// let myArray = ["apple", "banana", "cherry"]
// for (const element of myArray) {
//     console.log(element);

// }

// let str = "Javascript"
// for (const element of str) {
//     console.log(element);

// }

// let arr = [2, 4, 6, 8, 10]
// for (const i of arr) {
//     console.log(i*i);
// }

// let person = {
//     name: "Rohan",
//     age: 25,
//     city: "Delhi"
// }
// for (const value of Object.values(person)) {
//     console.log(value);

// }

// let myArray = [ [1, 2], [3, 4], [5,6]]
// let myArray2 = myArray.flat(Infinity);
// console.log(myArray2);

// for (const element of myArray2) {
//     console.log(element);

// }

// Map in javascript:----------

// const map = new Map()
// map.set("Name", "Raj")
// map.set("age", 25)
// map.set("City", "Siliguri")
// map.delete("age")
// // console.log(map.get('age'));
// console.log(map.has('age'));

// const myMap = new Map( [
//   ["name", "simran"],
//   ["age", 28],
//   ["city", "Mumbai"]
// ] )
// console.log(myMap.size);


// for (let key of myMap.values()) {
//     console.log(key);

// }

// const map = new Map()
// map.set(["a", 1])
// map.set(["b", 2])
// map.set(["c", 3])
// console.log(map.size);

// const myMap = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"]
// ]);
// myMap.delete("key1");
// console.log(myMap.has("key1"));
// console.log(myMap);
// const myArr = Array.from(myMap);
// console.log(myArr);

// const array = [
//   ["a", 100],
//   ["b", 200]
// ];
// const myMap = new Map(array);
// console.log(myMap);

// const myMap = new Map([
//   ["p", "apple"],
//   ["q", "banana"]
// ]);
// myMap.clear();
// console.log(myMap);

// For...in loop in Javascript:------------------------------------

// const person = {
//   name: "Aman",
//   age: 30,
//   city: "Mumbai"
// }
// for (const key in person) {
//   // console.log(key);
//   // console.log(person[key]);
//   console.log(`${key} => ${person[key]}`);
// }

// const user = {
//   id: 101,
//   details: {
//     name: "chandan",
//     age: 25
//   }
// };
// for (const key in user) {
//   console.log(key, user[key]);
// }

// const fruits = ["Apple", "banana", "mango"]
// for (const key in fruits) {
//   console.log( key, fruits[key]);

// }

// For..Each loop in javascript:----------------

// const number = [10, 20, 30, 40]
// number.forEach( function(num) {
//   console.log(num);

// } )
// number.forEach( (num) => {
//   console.log(num);
// } )

// let number = [1, 2, 3, 4]
// number.forEach( (val) => {
// console.log(val * 2);
// } )

// const arr = [5, 12, 7, 18, 9, 23]
// arr.forEach( (val) => {
//   if(val % 2 == 0){
//     console.log(val);
//   }
// } )

// const number = [5, 10, 15]
// let sum = 0;
// number.forEach( (num) => {
//  sum = sum + num;
// } )
// console.log(sum);

// const fruits = ["Apple", "Banana", "Mango"]
// fruits.forEach( (fruit, index, ) => {
//   console.log(fruit, index, ); 
// } )

// const user = [
//   {
//     name: "Aman",
//     age: 25
//   },

//   {
//     name: "simran",
//     age: 30
//   },

//   {
//     name: "Raj",
//     age: 22
//   }

// ]

// user.forEach( (key) => {
//   console.log(`${key.name} is ${key.age} years old`);

// } )

// const cities = ["Delhi", "Mumbai", "Kolkata"]
// cities.forEach( (city) => {
//   console.log(city.toUpperCase());
// } );

// const nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]

// let newArray = nestedArray.flat(Infinity)
// // console.log(newArray);
// newArray.forEach( (array) => {
//   console.log(array); 
// } );

// const arr = ["js", "ruby", "java", "paython", "cpp"]
//  let result = arr.forEach( (val) => {
//      return val

// } );
// console.log(result);

// Filter in javascript:-----------------------------------

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNum.filter( (num) => {
//    return num > 4
// } );
// console.log(newNums);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const evenNumber = numbers.filter( (num) => {

//       return  num % 2 === 0

// } );
// console.log(evenNumber);

// const numbers = [-5, 10, -3, 20, 0, 25];
// const positiveNumbers = numbers.filter( (num) => num > 0 )
// console.log(positiveNumbers);

// const users = [
//   {
//     name: "Aman",
//     age: 20
//   },
//   {
//     name: "Simran",
//     age: 16
//   },
//   {
//     name: "Raj",
//     age: 25
//   }
// ]
// const user = users.filter((value) => {
//   return value.age > 18
// });
// console.log(user);

// const tasks = [
//   {id: 1, name: "Task1", status: "complete"},
//   {id: 2, name: "Task2", status: "active"},
//   {id: 3, name: "Task3", status: "active"}
// ]

// const active = tasks.filter( (val) => {
//     return  val.status === "active"
// } );
// console.log(active);

// const numbers = [5, 15, 25, 35, 45, 55]
// let total = numbers.filter( (num) => {
//         return   num > 10 && num < 50
// } )
// console.log(total);

// const words = ["apple", "bat", "cat", "elephant", "dog"]
// const length = words.filter( (val) => (val.length <  5) );
// console.log(length);


// const student = [
//   {name: "Rahul", marks: 80},
//   {name: "Anjali", marks: 65},
//   {name: "Sneha", marks: 90}
// ]
// const topper = student.filter( (val) => (val.marks > 75) )
// console.log(topper);

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// myNumber.map( (num) => {
//   let result = num + 10
//     console.log(result);
// } );

// reduce method in javascript:--------------------------

// const myNum = [1, 2, 3]
// const myTotal = myNum.reduce( (acc, curr) => {
//       // console.log(`acc: ${acc} and curr: ${curr}`);
//       return acc+curr
// }, 0 )
// console.log(myTotal);

// const shoppingCart = [
//   {
//     itemName: "js course",
//     price: 2999
//   },
//   {
//     itemName: "py course",
//     price: 999
//   },
//   {
//     itemName: "mobile dev course",
//     price: 5999
//   },
//   {
//     itemName: "data science course",
//     price: 12999
//   },
// ]
// const priceToPay = shoppingCart.reduce( (acc, curr) => {
//     return acc + curr.price 
  
// }, 0 );
// console.log(priceToPay);

// const number = [1, 2, 3, 4, 5]
// const sum = number.reduce( (acc, curr) => {
//     return acc + curr
// }, 0 );
// console.log(sum);

// const nestedArray = [[1,2], [3,4], [5,6]];
// const newArray = nestedArray.flat(Infinity);
// // console.log(newArray);
// const Total = newArray.reduce( (acc, curr) => {
//       return acc + curr
// }, 0 );
// console.log(Total);










