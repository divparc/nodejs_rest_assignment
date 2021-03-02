var fs = require('fs');

fs.readFile(__dirname+'/text.txt','utf8',function(err,data){
    if(err) throw err;
    else{
       console.log(data) ;
    }
})