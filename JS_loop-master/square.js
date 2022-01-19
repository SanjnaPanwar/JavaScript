let c=require("readline-sync");
var num=c.questionInt("enter number:");
for (let i=1;i<=num;i++){
    console.log(i,"=",i*i);
}