let r=require("readline-sync");
function showNumber(limit){
    for (var i=0;i<=limit;i++){
        if (i%2==0){
            console.log(i,"-EVEN")
        }
        else {
            console.log(i,"-ODD")
        }
    }
}
let limit=r.questionInt("enter limit:")
showNumber(limit)