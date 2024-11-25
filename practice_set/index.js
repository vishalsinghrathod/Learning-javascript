let number = (prompt("Enter a number to reverse:"))
let reverse = 0

do {
    let digit = number % 10
    reverse = reverse*10 + digit;
    number = Math.floor(number/10)
} while (number  > 0);
console.log("the reverse number is:", reverse);
