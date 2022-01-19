let r=require("readline-sync")
function average(num1,num2,num3){
    avrg=(num1+num2+num3)/3
    return avrg
}
let num1=r.questionInt("enter 1st number:");
let num2=r.questionInt("enter 2nd number:");
let num3=r.questionInt("enter 3rd number:")
console.log(average(num1,num2,num3))