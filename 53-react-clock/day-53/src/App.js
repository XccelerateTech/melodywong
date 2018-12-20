import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import AddItem from './Additem'
import DisplayList from './DisplayList'
import Navbar from './Navbar'
import DisplayItem from './DisplayItem'
import {ReactDOM} from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NoMatch from './NoMatch'

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

    
        <Router>
          <div>
            <Navbar/>
             <Switch>
            <Route exact path="/" component={Clock} />
            <Route exact path="/additem" component={AddItem} addItem={this.addItem}/>
            <Route exact path="/displaylist" component={ DisplayList } name={this.state.name} list={this.state.list} deleteItem={this.deleteItem}/>
            <Route exact path="/displayitem/:id" component={ DisplayItem } />
            <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>

       
         

        

        
      </div>
    );
  }
}

export default App;
