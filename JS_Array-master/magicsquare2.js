const a=[
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
]
var d=0;
var d2=0;
var diagonal=2
for(let i=0;i<a.length;i++){
    var row=0;
    var col=0;
    for(let j=0;j<a[i].length;j++){
        row+=a[i][j]
        col+=a[j][i]        
    }
    d=d+a[i][i]
    d2=d2+a[i][diagonal]
    diagonal--
}
var rows_col=(row==col);
var diagonal_=(d==d2)
if (rows_col==diagonal_){
    console.log('It is a magic square')
}
else{
    console.log('It is not a magic square')
}