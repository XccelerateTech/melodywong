import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            items: '',
        }

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem({
            item:this.state.items
        });
        this.setState({
            items:''
        })
    }

    handleChange = (e) =>{
        this.setState({
            items: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h5>Add an item</h5>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.items} onChange={this.handleChange}/>
                <input type="submit" value="submit"/>

                </form>

                <p>You are going to add: {this.state.items}</p>

            </div>
        )
    }
}

export default AddItem;