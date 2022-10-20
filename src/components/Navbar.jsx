import {React, useState, useNavigate} from "react";
import "./Navbar.css"
import {Posts} from './'
const Navbar = (props) => {

  const [navBar, setNavBar] = useState("")
  // console.log(navBar, "hoping to render description")



// console.log(props.postReturn, "passed through postReturn")

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

