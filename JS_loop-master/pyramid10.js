let n = 5;
let s = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    s += " ";
  }
  for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
    s += k;
  }
  s += "\n";
}
console.log(s);


// 012345678
//  0123456
//   01234
//    012
//     0