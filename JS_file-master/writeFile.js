// var fs=require("fs");
// // fs.writeFile("write2.txt","haallooo")
// fs.writeFile("writeFile.txt","hii",function(err){
//     if (err) throwerr;
//     console.log("saved")
// });



// // creating an empty file
// var fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// }); 



// // append some content
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// }); 


var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});