import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteItem} from './Action/delete'

class DisplayList extends Component {
    constructor (props){
        super(props);
        this.state={
            list:this.props.list,
            name: this.props.name
        }
    }


    deleteItem(id){
        this.props.deleteItem(id)
    }

    render(){
        let list= this.props.list.list.map((each)=>{
            return (
                <li key={each.id} onClick={(e)=>this.deleteItem(each.id)}>{each.item}</li>
            )
        })

        return(
            <div>
                <h4>{this.props.name.name}'s Shopping List</h4>
                <ol>
                    {list}
                </ol>
              

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        list: state.list,
        name: state.name
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
       deleteItem: (id)=>{dispatch(deleteItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayList);