let me=require("readline-sync");
var balance=50000;
console.log("please insert your atm card");
var language=me.question("please select your language:");
if (language =="eng" || language== "e"){                       
        var userpin=me.question("please enter your pin:");
        if (userpin=="1234"){
           var choice=me.questionInt("please enter choice:1.cheack balance/2.withdraw/3.deposit/4.exit:")
           if (choice==1){
               console.log("your available balance is",balance)
           }
           else if (choice==2){
               var withdraw=me.questionFloat("please enter amount to withdraw:")
               if (balance>withdraw){
                  var total=balance-withdraw
                  console.log("please collect/yes :)")
                  console.log("your available balance is",total)
                }
               else{  
                  console.log("insufficient amount to withdraw")
                }
            }
            else if (choice==3){
            var deposit=me.questionFloat("enter amount to deposite:")
            var total=balance+deposit
            console.log("successfully deposite")
            console.log("your balance is",total)
            }
           else if (choice==4){
               console.log("don't want to do anything or exit")
           }
        }
        else{                                                                            
            console.log("your pin is incorrect")   
}       }                                   
else{ 
    console.log("your selected language is incorrect,please enter again.")
}   