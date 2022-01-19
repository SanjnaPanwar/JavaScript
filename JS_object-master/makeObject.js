let r=require("readline-sync");
let limit=r.question("enter limit:");
let obj={};
for (let i=0;i<limit;i++){
    let name=r.question("enter name:");
    let marks=r.questionInt("enter marks of student:");
    obj[name]=marks;
}
console.log(obj);
