import React from "react";
import Posts from "./Posts";
import Main from "./Main";
import {useParams} from "react-router-dom"
//import { link } from "react-router-dom"

const SinglePost = (props) => {
  const {id} = useParams()
  const filteredPost = props.allPosts.filter((element) => {
    if (element._id === id) {
      return true
    }
  }) [0]
  console.log(id)

  return  (
    filteredPost ? <div key={id} className="singlePost">
        <div>
          <h2>Title: {filteredPost.title}</h2>
        </div>
        <div>
          <h2>Description: {filteredPost.description}</h2>
        </div>
        <div>
          <h3>Price: {filteredPost.price}</h3>
        </div>
        <div>
          <h3>Seller: {filteredPost.author.username}</h3>
        </div>
        <div>
          <h3>Location: {filteredPost.location}</h3>
        </div>
        <div>
          <h3>Delivery:{filteredPost.willDeliver ? `Will Deliver` : `Will Not Deliver`}</h3>
        </div>
        {/* <Link to={`/posts/detail/${post._id}`}><button></button></Link> */}
      </div> : null
    )
 
};
export default SinglePost;
