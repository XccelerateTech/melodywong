import React from 'react';

const Navbar = () =>{
    return(

        <nav className="navbar navbar-expand navbar-light fixed-top">
        <img src="./logo.png" alt="logo"/> 
        <ul className="navbar-nav ml-auto">

            <button className="btn btn-outline-primary" >Login</button>

        </ul>
         </nav>

    )
}

export default Navbar;