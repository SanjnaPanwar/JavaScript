const m=require("fs");
const o=m.readFileSync("read.txt")
k=o.toString();
console.log(k)
{/* <Buffer 68 61 6c 6c 69 20 6c 61 64 64 6f 2c 79 6f 75 72 20 74 6f 6f 20 6d 75 63 68 3a 29> */}