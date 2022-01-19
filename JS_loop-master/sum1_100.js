let a=require("readline-sync");
let num=a.questionInt("enter number:");
sum=0
for(let i=1;i<=num;i++){
    sum+=i;
    console.log(sum) 
}