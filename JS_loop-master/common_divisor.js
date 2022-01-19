let c=require("readline-sync");
var num=c.questionInt("enter any number:");
var div=1;

while (num%div==0){
    div++
    console.log(div)
}