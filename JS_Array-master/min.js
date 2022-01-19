let r=require("readline-sync");
let limit=r.questionInt("enter limit of array:");
let arr=[];
for (i=0;i<limit;i++){
    let elements=r.questionInt("enter elements:");
    arr.push(elements)
}
// console.log(arr)
let min_num=arr[0];
for(var j=0;j<arr.length;j++){
    if(arr[j]<min_num){
        min_num=arr[j]
    }
}
console.log(min_num)



// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var min_num=numbers[0];
// for(var i=0; i<numbers.length;i++){
//     if (numbers[i]<min_num){
//         min_num=numbers[i]
    
//     }
// }
// console.log(min_num)