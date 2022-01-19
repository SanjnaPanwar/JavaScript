const a=[[12,34,56,43],[56,57,68,97],[32,33,65,107],[45,67,89,87],[65,67,7,66]]
for (var i=0;i<a.length ;i++){
    var max=0
    for (var j=0;j< a[i].length;j++){
        if (a[i][j]>max)
            max=a[i][j]
    }
    console.log(`max of [${a[i]}] --> ${max}`) 
}