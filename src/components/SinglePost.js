import React, { useState } from "react";
import Posts from "./Posts";
import Main from "./Main";
import { useParams, useNavigate } from "react-router-dom";
import { deletePost, sendMessage } from "../api-adapter";
//import { link } from "react-router-dom"

const SinglePost = (props) => {
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const { id } = useParams();
  const filteredPost = props.allPosts.filter((element) => {
    if (element._id === id) {
      return true;
    }
  })[0];
  console.log(filteredPost)
  const user = localStorage.getItem("username");
  console.log(id);
  console.log(filteredPost);

  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();

    const toDelete = e.target.id;
    const deleted = await deletePost(id, token);
    navigate("/posts");
    const remainingPost = props.allPosts.filter((element) => {
      if (element._id !== id) {
        return true;
      }
    });
    props.setAllPosts(remainingPost);
    console.log(deleted);
  }

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessage = (event) => {
    event.preventDefault();
    const content = event.target[1].value
    console.log(content)
    sendMessage(filteredPost._id, token, content)

  };

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
        <div>
          <form onSubmit={handleMessage}>
            <button type="submit">Send Message</button>
            <input value={message} onChange={handleInputChange}></input>
          </form>
          <div>{message}</div>
        </div>
      )}
    </div>
  ) : null;
};
export default SinglePost;
