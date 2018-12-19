import React, { Component } from 'react';
import faker from 'faker';

class Usercard extends Component {
    constructor (props){
        super(props);
        this.state={}

    }
    
    sort=(e)=>{
        this.props.sort()
    }
    

    render(){
       
        let userArray= this.props.list ? this.props.list.map((each)=>{
            return (
                <div key={each.id} className="card col-5">
                <div className="d-flex">
                <img src={faker.image.avatar()} alt="avatar"/>
                <div className="info">
                <h5 className="card-title"> Name: {each.first} {each.last}</h5>
                <p>Occupation: {each.occupation}</p>
                </div>
                </div>
                
                
                </div>
            )} ) : null;
       
        
        return(
            <div className="user">
                <div className="d-flex">
                <h4>User cards</h4> 
                <button className="btn btn-success" onClick={this.sort}>Sort by First Name</button>
                </div>
               <div className="row"> {userArray} </div> 
            </div>
        )
    }
}

export default Usercard;
