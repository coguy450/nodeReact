/**
 * Created by erichartmann on 11/14/15.
 */
var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem');
mongoose.connect('mongodb://localhost/ReactDB',function(err){
    console.log("connected to Mongo")
});

mongoose.connection.db.dropDatabase();
var items = [
    {
        name: 'Ice Cream',
        purchased:true
    },
    {
        name: "Waffles",
        purchased:false
    },
    {
        name:"Candy",
        purchased:true
    },
    {
        name:"Snarks",
        purchased:false
    }];

items.forEach(function(item){
    new GroceryItem(item).save();
});