let r=require("readline-sync");
let limit=r.questionInt("enter limit of array:");
let arr=[];
for (i=0;i<limit;i++){
    let elements=r.questionInt("enter elements:");
    arr.push(elements)
}
// console.log(arr)
let max_num=0;
for(var j=0;j<arr.length;j++){
    if(arr[j]>max_num){
        max_num=arr[j]
    }
}
console.log(max_num)


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max_num=0;
// for(var i=0; i<numbers.length;i++){
//     if (numbers[i]>max_num){
//         max_num=numbers[i]
    
//     }
// }
// console.log(max_num)