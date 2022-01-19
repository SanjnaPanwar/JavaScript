let re=require("readline-sync")
var amount=re.questionInt("enter amount:");
var note2000=note500=note200=note100=note50=note20=note10=note5=coin2=coin1=0
if (amount>=2000){
    note2000=Math.floor(amount/2000)
    amount=amount-note2000*2000
    console.log("2000\t=\t",note2000)
}
if (amount>=500){
    note500=Math.floor(amount/500)
    amount=amount-note500*500
    console.log("500\t=\t",note500)
}
if (amount>=200){
    note200=Math.floor(amount/200)
    amount=amount-note200*200
    console.log("200\t=\t",note200)
}    
if (amount>=100){
    note100=Math.floor(amount/100)
    amount=amount-note100*100
    console.log("100\t=\t",note100)
}
if (amount>=50){
    note50=Math.floor(amount/50)
    amount=amount-note50*50
    console.log("50\t=\t",note50)
}
if (amount>=20){
    note20=Math.floor(amount/20)
    amount=amount-note20*20
    console.log("20\t=\t",note20) 
}
    if (amount>=10){
    note10=Math.floor(amount/10)
    amount=amount-note10*10
    console.log("10\t=\t",note10) 
}
if (amount>=5){
    note5=Math.floor(amount/5)
    amount=amount-note5*5
    console.log("5\t=\t",note5)
}
if (amount>=2){
    coin2=Math.floor(amount/2)
    amount=amount-coin2*2
    console.log("2\t=\t",coin2) 
}
if (amount>=1){
    coin1=Math.floor(amount/1)
    amount=amount-coin1*1
    console.log("1\t=\t",coin1)
}                         