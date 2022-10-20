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

  console.log(allPosts);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-ft/posts"
      );
      const result = await response.json();
      const posts = result.data.posts;

      setAllPosts(posts);
    }
    getPosts();
  }, []);

  const [selectedPostId, setSelectedPostId] = useState("");
  console.log(selectedPostId, " I AM THE ID");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="posts" element={<Posts allPosts={allPosts} setSelectedPostId={selectedPostId}/>}>
          <Route path="details" element={<PostDetails />}></Route>
        </Route>
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
      {/* <Navbar />
      {selectedPostId.length ? (
        <SinglePost allPosts={allPosts} selectedPostId={selectedPostId} />
      ) : (
        <Posts allPosts={allPosts} setSelectedPostId={setSelectedPostId} />
      )}
      {/* <LoginForm/>
      <Register/> */}
//     </div>
//   );
// }; */}

export default Main;
