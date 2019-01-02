import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from "redux";

let RootState = {
  links: {
    title: '',
    url: ''
  }
}

const rootReducer = (state: RootState) => {
  return {
    links: [
      { title: 'Google', url: 'http://www.google.com' },
      { title: 'Yahoo', url: 'http://www.yahoo.com' },
    ]
  }
};

const store = createStore<any,any,any,any>(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
