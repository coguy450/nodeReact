'use strict';
var express = require('express'),
     app = express();
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
//var React = require('react');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
require('./server/database.js');
require('./server/routes/items.js')(app);
var GroceryItem = require('./server/models/GroceryItem');


app.get('/',function(req,res){
    res.render('./../views/index.ejs')
  /*  var application = React.createFactory(require('./app/components/GroceryItemList.jsx'));
    GroceryItem.find(function(error,doc){
        var generated = React.renderToString(application({reactOutput:doc}))
    })*/
})
    .use(express.static(__dirname + '/.tmp/'));

var server = app.listen('3000', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at port:'+ port);
});

app.use('/favicon.ico', express.static('images/favicon.ico'));

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found' + req.url);
    err.status = 404;
    next(err);
});

// error handlers
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
       console.log(err);
    });
}


module.exports = app;



