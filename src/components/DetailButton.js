import React from "react";
import { SinglePost } from "./";

const DetailButton = (props) => {
  const handleClick = () => {
    props.setSelectedPostId(props.elementId)
  }

  return <button onClick={handleClick} className='postDetails'>Post Details</button>;
};


export default DetailButton;
