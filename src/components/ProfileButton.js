import React from 'react'
import {Link} from 'react-router-dom'
import {ProfilePost} from "/"

const ProfileButton = (props) => {
  
  return (
  <Link to={`/profile/${props.element._id}`}><button  className='postDetails'>Post Details</button></Link>
  )
}

export default ProfileButton