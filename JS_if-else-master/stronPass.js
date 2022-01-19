let re=require("readline-sync")
var upper_case=re.question("enter the upper case:")
if (upper_case>="A" && upper_case<="Z"){
    console.log("it is a upper case")
    lower_case=re.question("enter the lower case:")
    if (lower_case>="a" && lower_case<="z"){
        console.log("it is a lower case")
        special_char=re.question("enter the special character:")
        if (special_char=="@" || special_char=="$" || special_char=="#" || special_char=="&" || special_char=="!" || special_char=="*"){
            console.log("it is a special character")
            numeric=re.question("enter the numeric:")
            if (numeric>="0" && numeric<="9"){
                console.log("it is a number")
                a=upper_case+lower_case+numeric+special_char
                if ((a.length)>=6 || (a.length)<=16){
                    console.log(a,"it is strong password")
                }
                else{
                    console.log(a,"it is not strong password")
                }
            }
            else{
                console.log("it is not a number")
            }
        }
        else{
            console.log("it is not strong password")
        }
    }
    else{
        console.log("it is not lower case")
    }
}
else{
    console.log("it is not upper case")
}