let re=require("readline-sync");
var user=re.questionInt("enter any no.:");
var mod = user%10
if (mod%2==0){
    console.log("yes",user*2)
}
else{
    console.log("no",user*3)  
}