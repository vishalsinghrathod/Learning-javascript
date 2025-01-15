class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username }`);
        
    }

  static createId(){
        return console.log(`123`);
        
    }
}

const hitesh = new User("hitesh")
// hitesh.createId()
 
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe()
iphone.createId()