var list1=['one','two','three','four','five']
var list2=[1,2,3,4,5,]

var k={};
for (let i=0;i<list1.length;i++){
    k[list1[i]]=list2[i];
}
console.log(k)