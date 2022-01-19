let r=require("readline-sync");
function perfect(user){
    sum=0
    for (let i=0;i<user;i++){
        if (user%i==0){
            sum+=i;
        }
    }
    if (user==sum){
        console.log("it's a perfect number")
    }
    else{
        console.log("it's not a perfect number")
    }
}
let user=r.questionInt("enter any number:")
perfect(user)