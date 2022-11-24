// calculator for three number

const readline = require("readline-sync");
const firstNum=readline.questionInt('enter number :');
const operator= readline.question("enter operator please '+','-','*','/' any of them :")
const secondNum=readline.questionInt('enter number :');
const secOperator=readline.question("enter operator please '+','-','*','/' any of them :")
const thirdNum=readline.questionInt('enter number :');
let result;
let finalresult;
if(operator=='+'){
    result=firstNum+secondNum;
}else if(operator=='-'){
    result=firstNum-secondNum;
}else if(operator=='*'){
    result=firstNum*secondNum;
}else if(operator=='/'){
    result=firstNum/secondNum;
};
if(secOperator=='+'){
    finalresult=result+thirdNum;
}else if(secOperator=='-'){
    finalresult=result-thirdNum;
}else if(secOperator=='*'){
    finalresult=result*thirdNum;
}else if(secOperator=='/'){
    finalresult=result/thirdNum;
};
console.log(`Total = ${finalresult}`);
