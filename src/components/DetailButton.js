import React from "react";
import {useNavigate, Link} from 'react-router-dom'
import { SinglePost } from "./";

const DetailButton = (props) => {

  return <Link to={`/posts/details/${props.elementId}`}><button  className='postDetails'>Post Details</button></Link>
  
  
};


export default DetailButton;