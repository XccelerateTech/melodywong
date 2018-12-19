import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            first: '',
            last: '',
            occupation: ''
        }
    }

    handleSubmit=(e)=>{
        this.props.addUser(this.state)
        this.setState({
            first: '',
            last: '',
            occupation: ''
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return(

            <div className="form">
            <h3> Add new users</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" value={this.state.first} name="first" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" value={this.state.last} name="last" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Occupation</label>
                    <input type="text" className="form-control" name="occupation" value={this.state.occupation} onChange={this.handleChange}/>
                </div>
             
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;