import React from "react";
import '../App.css'


function Header(){
    return(
        <div className="header">
            <div><h1>Book App</h1></div>
            <div className="links">
                <h3>Home</h3>
                <h3>Books</h3>
                <h3>About</h3>
            </div>

        </div>
    )
}

export default Header;