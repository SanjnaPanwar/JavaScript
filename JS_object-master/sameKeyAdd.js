var dic1={1:10, 2:20}
var dic2={3:30,2:40}
var dic3={5:50,6:60}
for(i in dict1){
    for (j in dict2){
        if (i===j){
            dict3=dict1[i]+dict2[j];
            break
        }
        else{
            dict3[i]=dict1[i]
            dict3[i]=dict2[j]
        }
    }
}
console.log(dict3)