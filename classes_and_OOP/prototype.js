// let myName = "Vishal     "
// let mychannel = "chai    "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman }`);
        
    }
}

Object.prototype.vishal = function(){
    console.log(`vishal is present in all object`);
    
}

Array.prototype.heyVishal = function(){
    console.log(`hello vishal`);
    
}

// heroPower.vishal()
// myHeros.vishal()
// myHeros.heyVishal() 
// heroPower.heyVishal()

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// console.log(Teacher.name);

// modern syntax:------------
Object.setPrototypeOf(TeachingSupport, Teacher)

// console.log(TeachingSupport.makeVideo);

let anotherUsername = "chaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
     
}

anotherUsername.trueLength( )
"vishal   ".trueLength()
"iceTea".trueLength()
 