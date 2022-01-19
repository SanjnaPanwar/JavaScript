let e=require("readline-sync");
let size=e.questionInt("enter any num.:");
let a=[];
let i=0;
let ls=[];
let count=0
while (i<size){
    let element=e.questionInt("enter element:");
    a.push(element)
    let j=0
    while (j<a.length){
        let k=0
        while (k<a.length){
            l=a[i],a[j],a[k]
            ls.push(l)
            count+=1
            k+=1
        }
        j+=1
    }
    i+=1
}
console.log(ls,count)

var  number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
pair=[]
for(i of n){
    for(j of n)
    {
        if (i+j===number){
            pair.push([i,j])
        }
    }
}
console.log(pair)