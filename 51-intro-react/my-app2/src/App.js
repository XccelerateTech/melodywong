import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import City from './City'

class App extends Component {
  constructor(){
    super();
    this.state={
      attraction:[
        {id:1, name: 'Tokyo Tower', bookmark: true},
        {id:2, name: 'Senso-ji', bookmark: false},
        {id:3, name: 'Ramen', bookmark: true},
      ]
    }
   
  }

  add=(id)=>{
    
    let newBookmark = [...this.state.attraction];
    newBookmark.find( each => each.id === id ).bookmark=true;

    this.setState({items: newBookmark})
  
  }

  cancel=(id)=>{
    
    let newBookmark = [...this.state.attraction];
    newBookmark.find( each => each.id === id ).bookmark=false;

    this.setState({items: newBookmark})
  
  }
  
  
  render() {
    return (
      <div className="App">
      <Navbar />
      <City attraction={this.state.attraction} add={this.add} cancel={this.cancel}/>
      </div>
    );
  }
}

export default App;
