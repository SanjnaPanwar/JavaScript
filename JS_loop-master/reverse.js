let e=require("readline-sync");
let num=e.questionInt("enter any number:");
// while(num>0){
//     console.log(num%10);
//     num=parseInt(num/10)
// }

for(;num>0;){
    console.log(num%10);
    num=parseInt(num/10)

}