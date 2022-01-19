let readlineSync = require("readline-sync");
var num1=readlineSync.questionInt("enter 1st number:");
var num2=readlineSync.questionInt("enter 2nd number:");
var num3=readlineSync.questionInt("enter 3rd number:");
if (num1>num2 && num1>num3){
    console.log(num1,"is greatest");
}
else if (num2>num1 && num2 > num3){
    console.log(num2,"is greatest");
}
else{
    console.log(num3,"is greatest");
}