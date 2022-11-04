import react from "react";
import { useParams } from "react-router-dom";

const ProfilePost = (props) => {
  const params = useParams()
  const id = params.id
  const post = props.allPosts.filter((post)=>{
    return post._id == id
  })[0]
  return (
    <div>
      I am ProfilePost
      <div>
        <h2>Title: {post.title}</h2>
      </div>
      <div>
        <h3>Description: {post.description}</h3>
      </div>
      <div>
        <h3>Price: {post.price}</h3>
      </div>
    {/*  <div>
        <h3>Seller: {props.currentUser.username}</h3>
      </div>*/}
  <div> 
        <h3>Location: {post.location}</h3>
      </div>
      <div>
        <h3>
          Delivery: {post.willDeliver ? `Will Deliver` : `Will Not Deliver`}
        </h3>
      </div> 
    </div>
  );
};

export default ProfilePost;
