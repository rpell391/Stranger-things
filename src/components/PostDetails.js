import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deletePost, createPost, loginUser } from "../api-adapter";

const PostDetails = (props) => {
  const post = props.filterPosts(props.allPosts._id)[0];
  console.log(post);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);



  async function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log(token);
    const addPost = await createPost(
      token,
      title,
      description,
      price,
      willDeliver
    );

    console.log(addPost)
  }

  //   async function handleDelete(e) {
  //     e.preventDefault();
  //     const toDelete = e.target.id;
  //     const token = localStorage.getItem("token");
  //     const deleted = await deletePost(toDelete, token);
  //     console.log(deleted);
  //   }

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log("submitted");
  //     const updatedPost = await updatePost(
  //       title,
  //       description,
  //       location,
  //       price,
  //       willDeliver,
  //       post._id,
  //       localStorage.getItem("token")
  //     );
  //     console.log(updatedPost);
  //   }
  //Step 1. Create Form
  //Step 2. Create Inputs in that form that match the data you are trying to collect.
  //Step 3. Creating a handleSubmit function that access event.target(reference register component for how to do that.)
  //Step 4. Grab token from local storage
  //Step 5. Writing a fetch function in your api-adapter/index.js (import that)
  //Step 6. This function should take in a token as well as title, description, location, will deliver
  //Step 7.

  console.log()

  return (
    <div>
      <label>Title: </label>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          name="title"
          value={title}
          // value={formDetails.title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <label>Description: </label>
        <input
          placeholder="Description"
          name="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>
        <label>Price: </label>
        <input
          placeholder="Price"
          name="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <label>Location: </label>
        <input
          placeholder="Location"
          name="price"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>
      {willDeliver.length > 0 ? 
      <button
        // id={post._id ? `${post._id}` : null}
        onClick={(e) => {
          handleDelete(e);
        }}
      >
        Delete Post
      </button> : null}
    </div>
  );
};
export default PostDetails;
