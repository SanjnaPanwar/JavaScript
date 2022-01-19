let v=require("readline-sync");
var user=v.questionInt("enter any number:");
var a=user
var rem=0
var sum=0
while (user>0){
    var rem=user%10
    sum=sum+rem
    user=Math.floor(user/10)
}
if (a%sum==0){
    console.log("it is a harshad num.")
}
else{
    console.log("it's not harshad num.")
}