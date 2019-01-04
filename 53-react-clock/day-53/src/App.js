import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import AddItem from './Additem'
import loadLinks from './loadLinks'
import DisplayList from './DisplayList'
import Navbar from './Navbar'
import DisplayItem from './DisplayItem'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './NoMatch'


class App extends Component {
  constructor(){
    super();
    this.state={
      
  }
}



  render() {
    return (
      <div className="App">

    
        <Router>
          <div>
            <Navbar/>
             <Switch>
            <Route exact path="/" component={Clock} />
            <Route exact path="/additem" component={AddItem} />
            <Route exact path="/displaylist" component={ loadLinks } />
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
