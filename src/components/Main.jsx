import React from "react";
import {Navbar, Posts, Register, LoginForm} from "./"

const Main = () => {


  return (
    <div id="main">
      <Navbar/>
      <LoginForm/>
      {/* <Register/> */}
      {/* <Posts/> */}
      <h1>I am main</h1>
    </div>
  );
};

export default Main;
