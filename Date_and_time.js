// Date

let myDate = new Date()
//console.log(myDate)

// console.log(typeof myDate); //object
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString())

// Times

let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())

// console.log(Date.now())
//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDate());
//console.log(newDate.getMonth());
//console.log(newDate.getDay());
//console.log(newDate.getHours());
//console.log(newDate.getTime());
//console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
      weekday: "long"
})

let presentDate = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(presentDate);

