let a=require("readline-sync");
var weight=0;
var limit=a.questionInt("enter number limit:");
for (var i=0;i<limit;i++){
    // var weight=0;
    var user=a.questionFloat("enter number:");
    weight+=user;
    // console.log(weight)
}
console.log("average is",weight/limit);
