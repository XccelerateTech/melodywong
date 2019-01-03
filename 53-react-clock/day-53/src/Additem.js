import React, { Component } from 'react';
import DisplayList from './DisplayList';
import {connect} from 'react-redux';
import {addItem} from './Action/add'

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            items: '',
        }

    }

    handleChange = (e) =>{

        this.setState({
            items: e.target.value
        })
    }


    addItem = (e) =>{
        e.preventDefault();
        let item={
            id: Math.random(),
            item: this.state.items,
        }

        this.props.addItem({item:item});

        this.setState({items: '',})
      }
    
      
    render(){
        return(
            <div>
                <h5>Add an item</h5>
                <form onSubmit={this.addItem}>
                <input type="text" value={this.state.items} onChange={this.handleChange}/>
                <input type="submit" value="submit"/>

                </form>

                <p>You are going to add: {this.state.items}</p>

                <DisplayList/>

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {

    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addItem: (item)=>{dispatch(addItem(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);