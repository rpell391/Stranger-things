import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { Navbar, SinglePost, DetailButton } from "./";
// import SinglePost from "./SinglePost";
import { Outlet } from "react-router-dom";

const Posts = ({allPosts, setSelectedPostId}) => {


  return (
    <>
    <div>
     <Outlet />
      {
        //Ternary similar to puppybowl to check allPosts.length.
        allPosts.length
          ? allPosts.map((element) => {
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
    
    </>
  );
};

export default Posts;
