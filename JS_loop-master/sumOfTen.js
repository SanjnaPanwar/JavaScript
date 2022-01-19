let s=require("readline-sync");
let limit=s.questionInt("enter the limit:");
sum=0
for(let i=1;i<=limit;i++){
    let num=s.questionInt("enter numbers:");
    sum+=num;
}
console.log(sum);