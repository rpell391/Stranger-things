import React from "react";
import {useParams} from "react-router-dom"


const Profile = (props) => {
  
  const { id } = useParams()
  const userPosts = props.allPosts.filter((element) => {
  if (element._id === id) {
    return true
    }
  })//[0];
  console.log(id)
  return (
    <div key={id} className= "singlePosts">
      I am profile
      <div>
        <h2>{userPosts}</h2>
      </div>

    </div>
  )


}

export default Profile