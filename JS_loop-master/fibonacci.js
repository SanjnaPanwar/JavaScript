let n=require("readline-sync");
var num=n.questionInt("enter number to limit:");
var i=0;
var a=0;
var b=1;
while (i<=num){
    console.log(a);
    c=a+b
    a=b
    b=c
    i++
}