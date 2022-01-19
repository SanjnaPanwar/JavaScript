let n=require("readline-sync");
var num=n.questionInt("enter number:");
var i=1;
while (i<=num){
    if (num%i==0){
        console.log("factorial of",num,"is",i)
    }
    i++
}