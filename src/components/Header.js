import { Link } from "react-router-dom";
import {FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";


function Header(props) {
    
    
    //inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };
    
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header className="interactive-header">
            <h1>Magic Life on Deck </h1>
            <nav ref={navRef} style={navStyle}>
                
                <Link to={"/"}>
                    <div>Home</div>
                    </Link>
                <Link to={"/cards"}>
                    <div>Card List</div>
                </Link>
                <Link to={"/create"}>
                    <div>Create a Deck</div>
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
                <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
                </button>
        </header>

  );
}

export default Header;