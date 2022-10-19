import React,{useState} from "react";
import {Navbar, Posts, Register, LoginForm, SinglePost} from "./"

const Main = () => {

const [singlePostPage, setSinglePostPage]=useState([])
console.log(singlePostPage)
const getSinglePost = async(posts_id) =>{
  const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-ft/posts/${posts_id}`)
  const result = await response.json();
  const singlePost= result.data.posts
setSinglePostPage(singlePost)
}

  return (
    <div id="main">
      {singlePostPage._id ?
      <SinglePost setSinglePostPage={setSinglePostPage} singlePostPage={singlePostPage}/>
      :
      <Posts/>
      }
      {/* <Navbar/> */}
      {/* <LoginForm/>
      <Register/> */}
      {/* <Posts/> */}
      <h1>I am main</h1>
    </div>
  );
};

export default Main;
