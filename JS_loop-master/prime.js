let s=require("readline-sync");
var num=s.questionInt("enter any num:");
if (num<2){
    console.log(num,"is not prime number")
}
for (var i=2;i<num;i++){
    if (num%i==0){
        console.log(num,"not a prime num")   
        }   
    console.log(num,"not a prime num")
    break
}


