// Types of memory:-
// (1) Stack (Permitive)  (2) Heap (Non-permitive)

let myYoutubename = "vishalKentertainment"
let anothername = myYoutubename
anothername = "TheCoupleSkid"

//console.log(myYoutubename);
//console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vishal@google.com"

console.log(userOne.email)
console.log(userTwo.email)