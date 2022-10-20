import React from "react";
import Posts from "./Posts";
import Main from "./Main";
//import { link } from "react-router-dom"

const SinglePost = (props) => {
  // console.log(props.allPosts)

  return props.allPosts.map((element) => {
    return props.selectedPostId === element._id ? (
      <div key={props.selectedPostId} className="singlePost">
        <div>
          <h2>Title: {element.title}</h2>
        </div>
        <div>
          <h2>Description: {element.description}</h2>
        </div>
        <div>
          <h3>Price: {element.price}</h3>
        </div>
        <div>
          <h3>Seller: {element.author.username}</h3>
        </div>
        <div>
          <h3>Location: {element.location}</h3>
        </div>
        <div>
          <h3>
            Delivery:{" "}
            {element.willDeliver ? `Will Deliver` : `Will Not Deliver`}
          </h3>
        </div>
        {/* <Link to={`/posts/detail/${post._id}`}><button></button></Link> */}
      </div>
    ) : null;
  });
};
export default SinglePost;
