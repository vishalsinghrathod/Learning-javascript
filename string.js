//const name = "vishal"
const repoCount = 50

//console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

//console.log(gameName); //[string: hitesh]

//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.length);
//console.log(gameName.toUpperCase());

const name = 'hitesh'

console.log(name[0])
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.__proto__);
console.log(name.indexOf('e'));

const newString = gameName.substring(0, 4)
//console.log(newString)

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString)

const newStringone = "    vishal     "
console.log(newStringone);
console.log(newStringone.trim())

const url = "https://hitesh.com/hitesh%20singh"
const newurl =  url.replace('%20', '-')
//console.log(newurl);

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));

