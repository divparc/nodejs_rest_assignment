var express = require('express');
var app = express();
var shopController = require('./controller/shopController');

//set up template engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    console.log("hello");
})

shopController(app);

app.listen(3000);
console.log("Listening to port 3000");