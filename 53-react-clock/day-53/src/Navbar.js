import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={`/`}><span className="nav-link">Home</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={`/additem`}><span className="nav-link">Add Item</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={`/displaylist`}> <span className="nav-link">Shopping List</span></Link>
                    </li>
                    </ul>
                   
                   
                </div>
            </nav>

        )
    }
}

export default Navbar