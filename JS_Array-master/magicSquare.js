const a=[
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
]
var i=0
var rowsum=0
while (i<a.length){
    var j=0
    while (j<a.length){
        rowsum+=a[i][j]
        j+=1
    }
    i+=1
}
console.log(rowsum)
var i=0
var colomnsum=0
while (i<a.length){
    var j=0
    while (j<a.length){
        colomnsum+=a[i][j]
        j+=1
    }
    i+=1
}
console.log(colomnsum)
var i=0
var leftdiagonal=0
while (i<a.length){
    var j=0
    var n=0
    while (j<a.length){
        leftdiagonal+=a[j][n]
        j+=1
        n+=1
    }
    i+=1
}
console.log(leftdiagonal)
var i=0
var rightdiagonal=0
while (i<a.length){
    var j=1
    while (j<a.length-1){
        rightdiagonal+=a[i][j]*3
        j+=1
    }
    i+=1
}
console.log(rightdiagonal)
if (rowsum==colomnsum && leftdiagonal==rightdiagonal){
    console.log("magic square")
}
else{
    console.log("not magic square")
}