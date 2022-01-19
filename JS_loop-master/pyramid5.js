let s="";
for (let i=5;i>=1;i--){
  for (let j=5;j>=i;j--){
    s+=j;
  }
  s+="\n";
}
console.log(s)

// 5
// 54
// 543
// 5432
// 54321