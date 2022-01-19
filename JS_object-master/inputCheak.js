var dict={'name':'Raju', 'marks':56}
let r=require("readline-sync");
var inp=r.question("enter something:")
for (i in dict){
    if( i===inp){
        console.log("yes");
        break
    }
    else{
        console.log("no")
        break
    }
}

