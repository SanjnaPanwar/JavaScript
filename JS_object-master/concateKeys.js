var d1 = {'a': 100, 'b': 200, 'c':300}
var d2 = {'a': 300, 'b': 200, 'd':400}
for(i in d1){
    for(j in d2){
        if(i===j){
            d1[i]=d1[i]+d2[j];
            break;
        }
        else{
            d1[i]=d2[j]
        
            break;
        }
    }
}
console.log(d1)