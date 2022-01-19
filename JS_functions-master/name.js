let r=require("readline-sync")
function getFullName(firstName,lastName){
    console.log(firstName+" "+lastName)
}
let firstName=r.question("enter your name:")
let lastName=r.question("enter your surname:")    
getFullName(firstName,lastName);