let r=require("readline-sync");
let num=r.questionInt("enter number:");
let lis=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
let ru=num.toString();
for (let i=0;i<ru.length;i++){
    console.log(ru[i]);
    for (let j=0;i<ru.length;j++){
        if (ru[i]==j.toString()){
            console.log(lis[j]);
        }
    }
}