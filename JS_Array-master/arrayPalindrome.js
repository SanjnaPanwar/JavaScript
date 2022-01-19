let r=require("readline-sync");
let limit=r.questionInt("enter limit of array:");
let arr=[];
for (i=0;i<limit;i++){
    let elements=r.question("enter elements:");
    arr.push(elements)
}
var new_array=[];
for (var i=arr.length-1; i>=0;i--){
    new_array.push(arr[i]);
}
var count=0;
for (var j=0; j<arr.length; j++){
    if (new_array[j]===arr[j]){
        count++;
    }
}
if(count===arr.length){
    console.log("This is palindrome");
    }
else{
    console.log("This is not a palindrome");
}