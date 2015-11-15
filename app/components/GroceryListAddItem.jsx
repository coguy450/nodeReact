var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    getInitialState:function(){
        return{input:""};

    },
    handleInputName: function(e){
        console.log('This is handle input',e.target.value)
        this.setState({input:e.target.value})
    },
    addItem: function(e){
        console.log('this is a submit')
        e.preventDefault();
      console.log("Adding item",this.state.input)
        action.add({
            name:this.state.input,
            purchased:false
        })
        this.setState({
            input:''

        })
    },
    render: function(){
        return(
            <div className="grocery-addItem">
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} type="text" onChange={this.handleInputName}/>
                    <button> Add Item </button>


                </form>
            </div>
        )

    }

})