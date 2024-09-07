let str = "javascript"
console.log(str.length); //10
console.log(str[0]);
console.log(str[9]);

let str1 = "Hello "
let str2 = "World"
let str3 = str1 + str2;
console.log(str3);
let str4 = str1.substring(0, 3) + str2.substring(0, 3)
console.log(str4);

let quota = "please give Rs 1000"
console.log(quota.split('Rs 1000'))