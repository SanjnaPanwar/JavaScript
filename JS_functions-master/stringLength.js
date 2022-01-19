// const { question } = require("readline-sync");
let r=require("readline-sync");
function stringLength(str1,str2){
    if(str1.length==str2.length){
        console.log(str1,"equal length")
        console.log(str2,"equal length")
    }
    else if (str1.length>str2.length){
        console.log(str1,"length is greater")
    }
    else{
        console.log(str2,"length is greater")
    }
}
let str1=r.question("enter something:")
let str2=r.question("enter something:")
stringLength(str1,str2)