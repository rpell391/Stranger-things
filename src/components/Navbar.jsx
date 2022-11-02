import {React, useState, useNavigate} from "react";
import "./Navbar.css"
import {Posts} from './'
import { Outlet, Link } from "react-router-dom";
const Navbar = (props) => {

  const [navBar, setNavBar] = useState("")
  // console.log(navBar, "hoping to render description")



// console.log(props.postReturn, "passed through postReturn")

  return (
  <>
    <div id="Navbar">
        <h2>Stranger's Things</h2>
        <div>
          <button className="home-button">Home</button>
        </div>
        <div>
          <Link to="posts"><button className="posts-button">Posts</button></Link>
        </div>
        <div>
          <Link to="addPost"><button className="post">Add Post</button></Link>
        </div>
        <div>
          <Link to='loginForm' ><button className="login-button">Login</button></Link>
        </div>
        <div>
          <Link to='register' ><button className="register-button">Register</button></Link>
        </div>
        <div>
          <Link to='profile' ><button className="profile-button">Profile</button></Link>
        </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Navbar;


//Make sure to create a ternary to display logout if userid is true and to display login when userid is false

