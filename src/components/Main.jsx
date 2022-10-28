import React, { useState, useEffect } from "react";
import { Navbar, Posts, Register, LoginForm, SinglePost, PostDetails } from "./";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
const Main = () => {
  const [allPosts, setAllPosts] = useState([]);
  const token = localStorage.getItem("token")
  

  useEffect(() => {
    async function getPosts() {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-ft/posts", options
      );
      const result = await response.json();
      const posts = result.data.posts;

      setAllPosts(posts);
    }
    getPosts();
  }, []);

  function filterPosts(postId) {
    return allPosts.filter((post) => {
      return post._id == postId
    })
  }


 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="posts" element={<Posts allPosts={allPosts}/>}></Route>
        <Route path="addPost" element={<PostDetails filterPosts={filterPosts} allPosts={allPosts}/>}></Route>
        <Route path="posts/details/:id" element={<SinglePost setAllPosts={setAllPosts} allPosts={allPosts}/>}></Route>
        <Route path="register" element={<Register />} />
        <Route path="loginForm" element={<LoginForm />} />
      </Route>
      
    )
  );

  return (
    <div id="main">
      
      <RouterProvider router={ router}>
      </RouterProvider>
    </div>
  );
};

export default Main;
