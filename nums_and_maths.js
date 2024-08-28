const score = 400
//console.log(score); //400

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length); //3

//console.log(balance.toFixed(2));

const otherNumber = 123.8699
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math);

//console.log(Math.abs(-4));

//console.log(Math.round(4.4)); //4

//console.log(Math.round(4.6)); //5

//console.log(Math.ceil(4.1)); //5

//console.log(Math.floor(4.9)); //5

//console.log(Math.min(4, 3, 6, 8));

//console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 to 1

console.log(Math.floor(Math.random()*10) + 1); // 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);