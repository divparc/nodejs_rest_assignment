var bodyParser = require('body-parser');

var data = [{id:1,name:'clothes',price:1000},{id:2,name:'groceries',price:500},{id:3,name:'mask',price:100}]

module.exports = function(app){

    app.use(bodyParser.urlencoded({
        extended:true
    }))

    app.get('/items',function(req,res){
        res.render('cart',{data:data});
    })

    app.get('/items/:id',function(req,res){
        var found = data.find(function(item){
            if (item.id = req.params.id)
            return item;
        });
        res.render('response',{data:found});
    });

    app.post('/items',function(req,res){
        var id = Number(req.body.item.id);
        var name = req.body.item.name;
        var price = Number(req.body.item.price);

        data.push({id:id,name:name,price:price});
        res.render('cart',{data:data});
    });

    app.delete('/items/:id',function(req,res){
        var item = data.find(function (item) {
            if (item.id = req.params.id)
                return item;
            });
            var index = data.indexOf(item);
            
            data.splice(index,1);
            res.render('cart',{data:data})            
        
    });

    app.patch('/items/:id', function (res, req) {
        console.log(req.params.id);
        var item = data.find(function (item) {
            if (item.id == req.params.id)
                return item;

        });

        var name = req.body.item.name;
        var price = req.body.item.price;

        item.name = name;
        item.price = price;
        res.render('display');


    })
}