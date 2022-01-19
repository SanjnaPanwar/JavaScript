let a=require("readline-sync");
let sum = 0;
var digit=0
let number = a.questionInt('Enter a positive integer: ');
let numberOfDigits = number.toString().length;
// console.log(numberOfDigits)
let temp = number;
while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** numberOfDigits;
    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(number,"is an Armstrong number");
}
else {
    console.log(number ,"is not an Armstrong number");
}