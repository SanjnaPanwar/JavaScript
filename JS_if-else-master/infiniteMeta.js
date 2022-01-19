let re =require("readline-sync")
username="sanjna panwar"
userpassword="sanju@123"
var name=re.question("enter your name : ")
var password=re.question("enter your password and your password should be in number,character and special character:")
if (name==username){ 
    if (password==userpassword){
        console.log("login successful")
    }
    else{
      console.log("your password is not correct.")
    }
}
else if (name!=username &&  password !=userpassword){
    console.log("user name and password is incorrect. please try again") 
    console.log("create new account:")      
    var username2=re.question("enter your name:")
    console.log("your username is" ,username2)
    var userpassword2=re.question("enter your password and your password should be in number,character and special character:")
    var re_enter_password=re.question("enter again your password:")
    if (userpassword2==re_enter_password){
        console.log("your account is created succefully")
    }
    else{
        console.log("yourpassword is not matchin.please try again:")
    }
}
else{
    console.log("your user name is wrong,please try again.")    
}