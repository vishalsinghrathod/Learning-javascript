// let topCompanies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm", "Netflix"]
//console.log(topCompanies.shift());
//console.log(topCompanies);

let topCompanies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm", "Netflix"]
let myCompanies = topCompanies.splice(2, 1, "ola")
//console.log(myCompanies);
//console.log(topCompanies);

topCompanies.push("Amazon")
console.log(topCompanies)

let cars = ["Toyota", "Honda", "Ford"];
cars.pop()
console.log(cars);

let numbers = [3, 6, 9];
numbers.unshift('0')
console.log(numbers);

let letters = ["a", "b", "c", "d"];
letters.shift();
console.log(letters);

let pets = ["dog", "cat", "bird"]
let myPets = pets.includes("cat")
console.log(myPets)

let number = [10, 20, 30, 40];
console.log(number.indexOf(30));

// let firstHalf = [1, 2, 3];
// let secondtHalf = [4, 5, 6];
// let thirdHalf = firstHalf.concat(secondtHalf);
// console.log(thirdHalf);

let firstHalf = [1, 2, 3];
let secondtHalf = [4, 5, 6];
let thirdHalf = [...firstHalf, ...secondtHalf];
console.log(thirdHalf);


