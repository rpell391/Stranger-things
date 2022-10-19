import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { Navbar } from "./";

const Posts = (props) => {
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

  // const postReturn = allPosts.map((element) => {
  //   return element.description;
    
  // });
  
  return (
    <div>
      {
        //Ternary similar to puppybowl to check allPosts.length.
        allPosts.length ? 
        allPosts.map((element) => {
          return (
          // console.log(element.author.username, "can this be seen")
        <div key= {element._id} className="User.id"> 
          <div>
            <h2>From: {element.author.username}</h2>
          </div>
          <div>
            <h3>Title: {element.title}</h3>
          </div>
        </div>
          )
        })

        :
        null
      }
    </div>
  );
};

export default Posts;
