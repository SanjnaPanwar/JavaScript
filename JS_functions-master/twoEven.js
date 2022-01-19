let r=require("readline-sync");
function checknum(num1,num2){
    if (num1%2==0 &&num2%2==0){
        console.log("both numbers is even")
    }
    else if (num1%2==0){
        console.log(num1,"is even ,not",num2)
    }
    else if (num2%2==0){
        console.log(num2,"is even ,not ",num1)
    }
    else{
        console.log("both are not even")
    }
}
num1=r.question("enter 1st number:");
num2=r.question("enter 2nd number:")    

checknum(num1,num2)