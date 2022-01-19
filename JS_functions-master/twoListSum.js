function addnumlist(l1,l2){
    console.log(l1+l2);
}
function addNumber(num1,num2){
    for (var i=0;i<3;i++){
        addnumlist(num1[i],num2[i])
    }
}
addNumber([10,20,30],[40,50,60])
