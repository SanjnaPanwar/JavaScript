let read = require("readline-sync");
var varX=read.questionInt("enter a number");
var vary=read.questionInt("enter a number");
if(varX%vary===0){
   console.log("Divisible");
}
else{
   console.log("Not divisible");
}