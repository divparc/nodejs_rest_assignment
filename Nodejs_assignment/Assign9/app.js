var fs = require('fs');

fs.readFile(__dirname+'/text.txt','utf8',function(err,data){
 if(err) console.log(err);
 else{
     console.log("Returning values of files as array")
     var arrayData = data.split(' ');
     console.log(arrayData);
 }
});