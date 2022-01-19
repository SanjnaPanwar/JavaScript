let readlineSync = require("readline-sync");
var year=readlineSync.questionInt("enter year:");
if (year%4==0){
    console.log("it's an leap year")
}
else if (year%400==0){
    console.log("it's an centurian")
}
else if ( year%100==0){
    console.log("it is not leap year")
}
else{
    console.log("it is not leap year")
}
