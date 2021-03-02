var fs = require('fs');
var writeData ="hey ho! Let’s go";

var writeableStream = fs.createWriteStream('writeMe.txt');
writeableStream.write(writeData,'utf-8');
writeableStream.end();
writeableStream.on('finish',function(){
    console.log("write completed")
});
