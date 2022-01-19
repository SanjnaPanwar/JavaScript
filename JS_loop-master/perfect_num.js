let a=require("readline-sync");
let num =a.questionInt("enter any number:");
let sum=0
for (let i=1;i<num;i++){
    if (num%i==0){
        sum+=i
    }
}
if (sum==num){
   console.log("number is perfect",num)
}
else{
    console.log("number is not perfect",num)
}