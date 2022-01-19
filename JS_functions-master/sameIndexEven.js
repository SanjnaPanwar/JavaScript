function numberList(list1,list2){
    for (var i=0;i<list1.length;i++){
        if (list1[i]%2==0 && list2[i]%2==0){
            console.log("both are same")
        }
        else{
            console.log("both are not same")
        }
    }
}
numberList([2, 6, 18, 10, 3, 75] , [6, 19, 24, 12, 3, 87] )
