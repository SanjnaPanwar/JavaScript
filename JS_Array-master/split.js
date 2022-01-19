let r=require("readline-sync");
let limit=r.questionInt("enter limit of elemenst:");
let arr=[];
for (let i=0;i<limit;i++){
    let elements=r.question("enter elements:");
    arr.push(elements);   
}
let arr1=[];
for(let j=0;j<arr.length;j++){
    let arr2=[];
    for(let k=0;k<arr[j].length;k++){
        arr2.push(arr[j][k]);
    }
    arr1.push(arr2);
}
console.log(arr1)