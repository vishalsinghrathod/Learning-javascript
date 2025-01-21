console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// Descriptor:-----------

const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(Descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
  writable: false,
  enumerable: false
})

chai.name = "aadi chai"
console.log(chai.name);

const myObject = {
    name: 'Diksha'
}

let Descriptor2 = Object.getOwnPropertyDescriptor(myObject, "name")
// console.log(Descriptor2);
Object.defineProperty(myObject, "name", {
    writable: false,
    enumerable: false
})

myObject.name = "vishal"
console.log(myObject.name);






