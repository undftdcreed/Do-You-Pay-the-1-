import { Link } from "react-router-dom";
import Home from "../pages/Home";



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


    return (
        <header>
            <h1>Magic Life on Deck </h1>
            <nav style={navStyle}>
                <Link to={"/"}>
                    <div>Home</div>
                    </Link>
                <Link to={"/cards"}>
                    <div>Card List</div>
                </Link>
                <Link to={"/create"}>
                    <div>Create a Deck</div>
                </Link>
            </nav>
        </header>

  );
}

export default Header;