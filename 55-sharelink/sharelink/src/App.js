import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Links from './Links';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list: [
        {id:1,name:'Google',link:'https://www.google.com',tags:['search','engine']},
        {id:2,name:'Yahoo',link:'http://www.yahoo.com',tags:['news','cool','search']}
      ],
      taglist:[],
    }
  }


  add = (object) => {
    this.setState({
      list: [...this.state.list,object]
    })

  }

  render() {
    return (
      <div className="row no-gutters">
      <div className="col-12 col-md-3">
        <Profile add={this.add} list={this.state.list}/>
      </div>
      <div className="col-12 col-md-9">
        <Links  list={this.state.list} tag={this.tag} taglist={this.state.taglist}/>
      </div>   
      </div>
   
    );
  }
}

export default App;




