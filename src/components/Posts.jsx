import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { Navbar, SinglePost, DetailButton } from "./";
// import SinglePost from "./SinglePost";
import { Outlet } from "react-router-dom";

const Posts = ({allPosts, setSelectedPostId}) => {
  
const [query, setQuery] = useState("")

// console.log(allPosts)
  return (
    <div>
      <label>Search Posts: </label>
      <input
      className="searchBar"
      type="text"
      // title="title"
      placeholder="Search Post Title"
      onChange={(event) => {
        setQuery(event.target.value)
      }}
      ></input>
      <div>

      
        
        {allPosts.length
          ? allPosts.filter((element) => element.title.toLowerCase().includes(query.toLowerCase())).map((element) => {
            // console.log(element._id, "can this be seen")
              return (
                <div key={element._id} className="User.id">
                  <div>
                    <h2>Title: {element.title}</h2>
                  </div>
                  <div>
                    <h3>Seller: {element.author.username}</h3>
                  </div>
                  <DetailButton 
                  // setSelectedPostId={setSelectedPostId}
                  elementId= {element._id}
                  />

                </div>
              );
            })
          : null
      }
      </div>
    </div>
  );
};

export default Posts;
