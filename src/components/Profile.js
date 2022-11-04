import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userProfile } from "../api-adapter";
import {ProfileButton, ProfilePost} from "/"

const Profile = (props) => {
  const [currentUser, SetCurrentUser] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getCurrentUser() {
      const userInformation = await userProfile(token);
      SetCurrentUser(userInformation);
    }
    getCurrentUser();
  }, []);

  // const { id } = useParams()
  // const userPosts = props.allPosts.filter((element) => {
  //     if (element._id === id) {
  //       return true
  //     }
  //   }
  // ) [0];

  // console.log(currentUser, currentUser._id)
  // const messages = currentUser.messages
  // console.log(messages)

  //   // const user = localStorage.getItem("username")

  //   const returnedMessages = messages.map((element) => {
  //     console.log(element)
  //   return element
  //   }
  //   )
  console.log(currentUser);

  // function clickHandler(element) {
  //   if (element._id)
  // }


  return currentUser && currentUser._id ? (
    <div key={currentUser._id} className="singlePosts">
      <h1>My Posts</h1>
      <div>
        {currentUser.posts.map((element) => {
          // console.log(element._id)
          // clickHandler(element)
          return <div key= {`posts map in profile: ${element._id}`}>
            <div>
              <h2>Title: {element.title}</h2>
            <ProfileButton element={element}/>
            {/* <button onClick={clickHandler} className='postDetails'>Post Details</button> */}
              </div>
            


              {/* <div>
                <h3>Description: {element.description}</h3>
              </div>
              <div>
                <h3>Price: {element.price}</h3>
              </div>
              <div>
                <h3>Seller: {currentUser.username}</h3>
              </div>
              <div>
                <h3>Location: {element.location}</h3>
              </div>
              <div>
                <h3>Delivery: {element.willDeliver ? `Will Deliver` : `Will Not Deliver`}</h3>
              </div> */}
          </div>
        })}
      </div>

      <div>
        {currentUser.messages.map((element) => {
          // console.log(element);
          return <div key= {`message map in profile: ${element._id}`}>
            {element.fromUser.username}
            {element.content}
          </div>;
        })}
      </div>
    </div>
  ) : null;
};

export default Profile;
