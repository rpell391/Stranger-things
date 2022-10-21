import React from "react";
import Posts from "./Posts";
import Main from "./Main";
import { useParams } from "react-router-dom";
import { deletePost } from "../api-adapter";
//import { link } from "react-router-dom"

const SinglePost = (props) => {
  const { id } = useParams();
  const filteredPost = props.allPosts.filter((element) => {
    if (element._id === id) {
      return true;
    }
  })[0];
  const user = localStorage.getItem("username");
  console.log(id);
  console.log(filteredPost);

  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deletePost(id, token);
    const remainingPost = props.allPosts.filter((element) => {
      if (element._id !== id) {
        return true;
      }
    });
    setAllPosts(remainingPost);
    console.log(deleted);
  }

  return filteredPost ? (
    <div key={id} className="singlePost">
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
        <h3>
          Delivery:
          {filteredPost.willDeliver ? `Will Deliver` : `Will Not Deliver`}
        </h3>
      </div>
      {/* <Link to={`/posts/detail/${post._id}`}><button></button></Link> */}
      {filteredPost.author.username === user ? (
        <button onClick={handleDelete}>Delete</button>
      ) : (
        <h2>I will be messages</h2>
      )}
    </div>
  ) : null;
};
export default SinglePost;
