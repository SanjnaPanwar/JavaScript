let r=require("readline-sync");
function multiplesOfNumbers(limit){
    for(let i=1;i<=limit;i++){
        if(i%3==0 || i%5==0){
            console.log(i)
        }
    }
}
var limit=r.questionInt("enter limit:")
console.log(multiplesOfNumbers(limit))