var fs = require('fs');

// txt=process.argv[2];

// fs.writeFile(__dirname+'/text.txt',txt,function(err){
//     if(err) throw err;
//     else{
//        console.log("file saved"); 
//     }
// });

fileName = process.argv[2]+".txt";
txtToWrite = process.argv[3];

fs.writeFile(fileName,txtToWrite,function(err){
    if(err) throw err;
    console.log("File Saved!!");
});

fs.readFile(fileName,'utf8',function(err,data){
    if(err) throw err;
    else{
        console.log(data);
    }
})