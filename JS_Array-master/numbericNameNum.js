const read=require("readline-sync");
var user=read.question("enter any number:");
const n=[0,1,2,3,4,5,6,7,8,9]
const l=["zero","one","two","three","four","five","six","seven","eight","nine"];
let k=user.toString()
for (let i=0;i<k.length;i++){
    for(let j=0;j<l.length;j++){
        if (k[i]==j){
            console.log(l[j])
        }
    }
}
