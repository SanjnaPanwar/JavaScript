let readlineSync=require("readline-sync")
var num=readlineSync.questionInt("enter starting number:")
var num2=readlineSync.questionInt("enter limit:")
while (num<=num2){
    var i=1
    while (i<=10){
        console.log(num*i)
        i+=1
    }
    console.log()
    num+=1
}