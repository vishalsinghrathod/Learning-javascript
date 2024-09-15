//singleton
// object.create

// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "Full name": "Hitesh Choudhary",
    [mysym]: "mykey1",
    age: 18,
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["Full name"]);
// console.log(jsUser.mySym);
//console.log(jsUser[mysym])

jsUser.email = "vishal@google.com"
//console.log(jsUser);

// Object.freeze(jsUser)

jsUser.email = "simran@google.com"
//console.log(jsUser.email);

jsUser.greeting = function () {
    console.log("Hello JS user");
}

jsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// Singleton Object :-

// const tinderUser = new Object()
// console.log(tinderUser);

// const tinderUser = {}

// tinderUser.ID = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vishal",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// Merge Two or more object:--

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = Object.assign({}, obj1, obj2, obj4 )

const obj3 = { ...obj1, ...obj2, ...obj4 }

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 2,
        email: "y@gmail.com"
    },

    {
        id: 3,
        email: "Z@gmail.com"
    }
]

// console.log(user[0].email)
// console.log(user[1].email)
// console.log(user[2].email)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

const tinderUser = {
    ID: "123abc",
    name: "sammy",
    isLoggedIn: false
}

//console.log(tinderUser.hasownproperty('name'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor); // comman way to print

// const { courseInstructor } = course
// console.log(courseInstructor);

const { courseInstructor: Instructor } = course
console.log(Instructor);


