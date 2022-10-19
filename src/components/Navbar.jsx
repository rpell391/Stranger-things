import {React, useState} from "react";
import "./Navbar.css"
const Navbar = () => {

  const [navBar, setNavBar] = useState({})



  return (
    <div id="Navbar">
        <h2>Stranger's Things</h2>
        <div>
          <button className="home-button">Home</button>
        </div>
        <div>
          <button className="posts-button">Posts</button>
        </div>
        <div>
          <button className="login-button">Login</button>
        </div>
    </div>
  );
};

export default Navbar;


//Make sure to create a ternary to display logout if userid is true and to display login when userid is false

