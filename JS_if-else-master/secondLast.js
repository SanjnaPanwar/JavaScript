let re=require("readline-sync")
var user=re.questionInt("enter your no.:")
var a=Math.floor(user/10)
var b=a%10
if (b==3){
    console.log("yes")
}
else{    
    console.log("no")
}