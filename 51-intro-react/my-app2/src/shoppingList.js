import React, { Component } from 'react';

class ShoppingList extends Component {
    render(){
        return (
            <div>
                <h1> {this.props.name} My Shopping List</h1>
            </div>
        )
    }
}

export default ShoppingList;