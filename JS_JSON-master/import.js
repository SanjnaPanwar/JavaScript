// 1st method
const fs = require('fs')
const buf=fs.readFileSync("gs.json","utf8")
console.log(buf)
const k=buf.toString();
console.log(k)


// 2nd method
const fs = require('fs')
const buf=fs.readFileSync("gs.json")
const k=buf.toString();
console.log(JSON.parse(k))

// 3rd method
const fs = require('fs')
let jsonData = JSON.parse(fs.readFileSync('gs.json', 'utf-8'))
console.log(jsonData)