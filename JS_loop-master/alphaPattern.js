// var n=5;
// for (var i=0;i<=n;i++){
//     var k=ord("A");
//     for (var j=0;j<=n;j=i+1){
//         console.log(chr(k),"\n");
//         k=k+1;
//     }
//     console.log(); 
// }


let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);