import React,{useState, useEffect} from "react";

import {Navbar, Posts, Register, LoginForm, SinglePost} from "./"

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

  const [selectedPostId, setSelectedPostId] = useState("")
    console.log(selectedPostId, " I AM THE ID")

// const router = createBrowserRouter(createRoutesFromElements)
//   <Route path="/" element={<Navbar />}>
//     <Route path="posts" element={<Posts />}

// </Route>
  return (
    <div id="main">
      {/* <RouterProvider router={router} */}
      <Navbar />
      {selectedPostId.length ?
      <SinglePost allPosts={allPosts} selectedPostId={selectedPostId}/>
      :
      <Posts allPosts={allPosts} setSelectedPostId={setSelectedPostId}/>
      }
      {/* <LoginForm/>
      <Register/> */}
      
    </div>
  );
};

export default Main;
