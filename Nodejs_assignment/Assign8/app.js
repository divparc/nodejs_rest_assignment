var fs = require('fs');
//var total =0;
fs.readFile(__dirname + '/sum.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    var Numbers = data.split(' ').map(function(num){                 //convert string into array
            return parseInt(num)
        }
    );
    console.log(Numbers)
    var total = Numbers.reduce(function(acc, currentNumber){
        return acc + currentNumber;
    });
    // for(let i=0;i<Numbers.length;i++)
    // {
    //     total+=parseInt(Numbers[i]);
    // }
    console.log('The result of sum all numbers is: ' + total);
});