let r=require("readline-sync");
function license_checker(speed){
    if(speed<70){
        console.log("ok")
    }
    else if (speed>70){
        point=0
        for (var i=70;i<speed;i+=5){
            point+=1
        }
        if(point>12){
            console.log("License suspended");
        }
        else{
            console.log(point)
        }
    }
}
let speed=r.questionInt("enter your speed:")
license_checker(speed)