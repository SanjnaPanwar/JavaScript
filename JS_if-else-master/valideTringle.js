let re = require("readline-sync");
console.log("enter three angles of a triangle to check it is valid or not");
var x=re.questionInt("enter 1st angle:");
var y=re.questionInt("enter 2nd angle:");
var z=re.questionInt("enter 3rd angle:");
if (x+y+z==180 || x+y>z==180){     
    console.log("triangle is valid")
}
else{
    console.log("triangle is not valid") 
} 