let readlineSync=require("readline-sync")
var num=readlineSync.questionInt("enter number:")
var i=0
while (i<=num){
    console.log(i)
    i+=1
}