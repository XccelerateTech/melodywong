import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShoppingList from './shoppingList';
import ShoppingList2 from './shoppingList2';
import CommentCard from './commentcard';

const user = {
    first:'Mimi',
    last:'Haha'
}

const formatName = (user) => {
    return (user.first + ' ' +user.last)
}

const hello = (
    <div > 
    <h1 style={{background:'pink'}}> Hello world! {formatName(user)}</h1>
    <h2> More words here</h2>
    </div>
)

const shopping = (
    <div>
    <ShoppingList name={"Sam"} />
    <ShoppingList2 name={"Santa Clause"} date = {"12/12/2018"} />
    </div>
)

ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
