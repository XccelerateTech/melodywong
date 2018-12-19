import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Usercard from './Usercard'

class App extends Component {
  constructor () {
    super();
    this.state={
      list: []
    }
  }

  addUser=(object)=>{
    
    let newObject={
      id:Math.random(),
      first:object.first,
      last:object.last,
      occupation:object.occupation
    }
   
    this.setState({
      list: [...this.state.list, newObject]
    })
  }

  sort =()=>{
    let sortingList= this.state.list
    sortingList.sort(function(a, b){
      var x = a.first.toLowerCase();
      var y = b.first.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    this.setState({
      list:sortingList
    })
  }

  render() {
    return (
      <div className="App">
        <Form addUser={this.addUser}/>
        <Usercard list={this.state.list} sort={this.sort}/>
      </div>
    );
  }
}

export default App;
