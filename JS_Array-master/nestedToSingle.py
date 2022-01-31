const a=[[1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]]
var k=[]
for (let i=0; i<a.length;i++){
    if (typeof(a[i])=="object"){
        for (let j=0; j<a[i].length;j++){
            if (typeof(a[i][j])=="object"){
                for (let l=0;l<a[i][j].length;l++){
                    if (typeof(a[i][j][l])=="object"){
                        for (let h=0;h<a[i][j][l].length;h++){
                            if (typeof(a[i][j][l][h])=="object"){
                                for (let g=0;g<a[i][j][l][h].length;g++){
                                    k.push(a[i][j][l][h][g])
                                }
                            }
                            else{
                                k.push(a[i][j][l][h])
                            }
                        }
                    }
                    else{
                        k.push(a[i][j][l])
                    }
                }  
            }          
            else{
                k.push(a[i][j])
                }
        }
    }
    else{
        k.push(a[i])
    }
}
console.log(k)
