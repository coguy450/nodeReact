/**
 * Created by erichartmann on 11/14/15.
 */
var mongoose = require('mongoose');

var GroceryItemSchema = {
    name:{
        type:String,
        require:true,
        unique:true
    },
    purchased:Boolean,
    id:String

};
var GroceryItem = mongoose.model('GroceryItem',GroceryItemSchema,"groceryItems");
module.exports= GroceryItem;