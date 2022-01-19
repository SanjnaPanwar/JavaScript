var number = 12;
 
if(Number%3 === 0){
   console.log("choco")
}
else if(number % 7){
   console.log("late")
}
else if(a%3==0 && a%7==0) {
   console.log("Chocolate")
}
else {
   console.log("Not divisible by 3 , 7")
}

let readlineSync = require("readline-sync");
var age= readlineSync.questionInt("What is your age: ")
console.log(age);