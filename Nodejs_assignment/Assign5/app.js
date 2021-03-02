var fs = require('fs');
var wordToFind = process.argv[2];
var count = 0;

fs.readFile(__dirname+'/text.txt','utf8',function(err,data){
    if(err) throw err;

    var aWordsText = data.toLowerCase().split(' ');
    console.log(aWordsText);
    // var aFilterWords = aWordsText.filter(function(word){
    //     return word.includes(wordToFind);
    // })
    for(let i=0;i<aWordsText.length;i++)
    {
        if(aWordsText[i] === wordToFind){
            count++;
        }
    }
    console.log('The word ' + wordToFind + ' appears ' + count + " times in the text.");
})