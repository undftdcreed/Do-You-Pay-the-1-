import { Link } from "react-router-dom";
import React from "react";

function Header(props) {
    return (
        <header>
            <h1>magicthegathering deck builder</h1>
            <nav>
                <ul>
                <Link to="/">Home</Link>           
                <Link to="/cards">Card List</Link>
                <Link to="/create">Create Card</Link>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;