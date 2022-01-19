let r=require("readline-sync");
function eligibleForVote(user){
    if (user>18){
        console.log("eligible")
    }
    else{
        console.log("not eligible")
    }
}
var user=r.question("enter your age:")
eligibleForVote(user)