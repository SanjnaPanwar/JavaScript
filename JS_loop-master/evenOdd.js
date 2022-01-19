let readlineSync=require("readline-sync")
var num=readlineSync.questionInt("enter number:")
var i=0
while (i<=num){
    if (i%2 ==0){
        console.log(i)
    }    
    i+=1
}