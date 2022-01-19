



// const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
// let uniques_list = [];
// for (i of list) {
//   for (j in i) {
//       if (!uniques_list.includes(i[j])) { 
//         uniques_list.push(i[j]);
//       }
//   }
// }
// console.log(uniques_list);


list1=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
list2=[]
for (i in list1){
    // console.log(list1[i]);
    for (j in list1[i]){
        // console.log(list1[i][j]);
        if(!list2.includes(list1[i][j])){
            list2.push(list1[i][j])

        }
    }
}
console.log(list2);