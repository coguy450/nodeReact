/**
 * Created by erichartmann on 11/14/15.
 */
module.exports = function(app){
    var GroceryItem = require('./../models/GroceryItem');

    app.route('/api/items')
        .get(function(req,res){
            GroceryItem.find(function(error,doc){
                res.send(doc)
            })

    })
    .post(function(req,res){
            var item = req.body;
            console.log('adding')
            console.log(req.body)
            var groceryItem = new GroceryItem(item)
            groceryItem.save(function(err,data){
                res.status(300).send()
            })
        });

    app.route('/api/items/:id')
        .delete(function(req,res){
            console.log('deleting')
            console.log(req.params.id)
            GroceryItem.remove({
                _id:req.params.id
            },function(err,removed){
              if(err)console.log(err);
                console.log(removed)
            })
        })
        .patch(function(req,res){
            console.log('patching')
            _id:req.body._id
        },function(error,doc){
            for (var key in req.body){
                doc[key] = req.body[key]
            }
            doc.save();
            res.status(200).send();
        })
};
