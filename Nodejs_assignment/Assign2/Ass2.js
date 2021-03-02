var fs = require('fs');

var readMe = fs.readFileSync('test.txt','utf8');
console.log(readMe);