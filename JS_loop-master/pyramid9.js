let n = 5;
let s = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    s += j;
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    s +=" ";
  }
  s += "\n";
}
console.log(s);

// 0123 
// 012   
// 01     
// 0