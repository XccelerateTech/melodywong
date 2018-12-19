import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import AddItem from './Additem'
import DisplayList from './DisplayList'

class App extends Component {
  constructor(){
    super();
    this.state={
      name: 'Lomo',
      list: [
        {id:1, item: 'Apple'},
        {id:2, item: 'Orange'}
      ]
  }
}

  deleteItem = (id) =>{
    const list = this.state.list.filter(item=>{
      return item.id != id
    })

    this.setState({
     list: list
    })
    
  }

  addItem = (item) =>{
    item.id=Math.random();
    
    this.setState({
      list: [...this.state.list, item]
    })

  }

  render() {
    return (
      <div className="App">

         <Clock />
       
         <DisplayList name={this.state.name} list={this.state.list} deleteItem={this.deleteItem}/>

        <AddItem addItem={this.addItem} />

        
      </div>
    );
  }
}

export default App;
