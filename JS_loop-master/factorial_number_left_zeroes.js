let a=require("readline-sync");
let num=a.questionInt("enter any number for factorial:");
let fac=1;
for (let i=num;i>0;i--){
    fac*=i
}
let num2=fac.toString();
num2=num2.replace(/0+$/,"");
num2=parseInt(num2)
console.log( typeof num2,num2)
