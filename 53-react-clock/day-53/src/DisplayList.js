import React, { Component } from 'react';

class DisplayList extends Component {
   
    deleteItem(id){
        this.props.deleteItem(id)
    }

    render(){
        let list= this.props.list.map((each)=>{
            return (
                <li key={each.id} onClick={(e)=>this.deleteItem(each.id)}>{each.item}</li>
            )
        })

        return(
            <div>
                <h4>{this.props.name}'s Shopping List</h4>
                <ol>
                    {list}
                </ol>
              

            </div>
        )
    }
}

export default DisplayList;