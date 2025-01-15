const user = {
    username: "vishal",
    loginCount: 8,
    signedIn: true,

    getUserDetailes: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetailes());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this

}

const userOne =   User("hitesh", 12, true)
const userTwo =   User("ChaiAurCode", 15, false)
// console.log(userOne);
console.log(userTwo);

