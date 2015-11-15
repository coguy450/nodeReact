var React = require('react/addons');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');
console.log('hello from jsx');

var GroceryItemList = require('./components/GroceryItemList.jsx');
var initial = groceryItemStore.getItems();

function render(){
    React.render(<GroceryItemList items={initial}/>,app);

}
groceryItemStore.onChange(function(items){
    initial=items;
    render();
});

render();

