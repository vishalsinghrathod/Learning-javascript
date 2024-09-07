//arrays

const myArr = [0, 1, 2, 3, 4, 5]
//console.log(myArr[1]) // 1

const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

//Array Method

//myArr.push(6)
//myArr.push(7)
//console.log(myArr);

//myArr.pop()
//console.log(myArr);

//myArr.unshift(9)
//console.log(myArr);

//myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(9)); // false
//console.log(myArr.includes(3)); // true

//console.log(myArr.indexOf(9)); // (-1) means not present
//console.log(myArr.indexOf(4)); // (4) that means present at 4 no. og index

//const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//const newArr = myArr.join("-")
//console.log(newArr);

// slice and splice

//console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
//console.log("c", myArr);
//console.log(myn2);

const myArr3 = [1, 2, 3, 4, 5, 6]
//console.log(myArr3);

const myn3 = myArr3.splice(2, 2)
//console.log(myn3)
//console.log(myArr3)

let myArr4 = [1, 2, 3, 4, 5, 6]
//console.log(myArr4);

let myn4 = myArr4.splice(3, 3, 101, 102, 103)
//console.log(myn4);
//console.log(myArr4);

let myArr5 = [1, 2, 3, 4, 5, 6]
let myn5 = myArr5.splice(3)
// console.log(myn5)
//console.log(myArr5)

//2nd class

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread operator - to join multiple arrays

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

//Rare Case:-
 let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 let real_another_array = another_array.flat(Infinity)

//  console.log(real_another_array);

//convert another datatype to array:-

// console.log(Array.isArray("Hitesh")) //false
// console.log(Array.from("Hitesh"))

// console.log(Array.from({name: "Hitesh"})) //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))




