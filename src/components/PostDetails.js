import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {updatePost, deletePost, createPost, loginUser} from "../api-adapter"


const PostDetails = (props) => {
  // const {id} = useParams()
  
  // const post = props.filterPosts(props.allPosts)[0]
  // console.log(post)
    const [ title, setTitle ] = useState ("")
    const [ description, setDescription ] = useState ("")
    const [ location, setLocation ] = useState ("")
    const [ price, setPrice ] = useState ("")
    const [ willDeliver, setWillDeliver ] = useState (true)

  // useEffect(() => {
  //   setFormDetails(
  //     {
  //     title: props.allPosts.title,
  //     description: props.allPosts.description,
  //     price: props.allPosts.price,
  //     location: props.allPosts.location,
  //   })
  // },[])

//   function handleChange(e) {
//     e.preventDefault()
//     const toUpdate = e.target.id
//     const update = e.target.value
//     const updatedForm = {...formDetails, [toUpdate]: update }
//     setFormDetails(updatedForm)
// }
// async function handleDelete(e){
//   e.preventDefault()
//   const toDelete = e.target.id
//   const token = localStorage.getItem('token')
//   const deleted = await deletePost(toDelete, token)
//   console.log(deleted)
// }
async function handleSubmit(e) {
  e.preventDefault()
  // const title= e.target
  // const description=
  // const price=
  // const location=
  // const willDeliver= e.target.value
  const token = localStorage.getItem("token")
  console.log(token)
  const addPost = await createPost(token, title, description, price, willDeliver)
  // const loginInfo= await loginUser()
  console.log(addPost)
}
// console.log(formDetails)
// const onUpdateField = e => {
//   const nextFormDetails= {
//     ...formDetails,
//     [e.target.name]: e.target.value
//   }
// }

//Step 1. Create Form
//Step 2. Create Inputs in that form that match the data you are trying to collect.
//Step 3. Creating a handleSubmit function that access event.target(reference register component for how to do that.)
//Step 4. Grab token from local storage
//Step 5. Writing a fetch function in your api-adapter/index.js (import that)
//Step 6. This function should take in a token as well as title, description, location, will deliver
//Step 7. 



  return (
    <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input 
      placeholder="Title"
      name="title"
      value= {title}
      // value={formDetails.title}
      onChange={(event) => {
        setTitle(event.target.value)
      }}
      >
      </input>
      <label>Description: </label>
      <input 
      placeholder="Description"
      name="description"
      value= {description}
      onChange={(event) => {
        setDescription(event.target.value)
      }}
      >  
      </input>
      <label>Price: </label>
      <input 
      placeholder="Price"
      name="price"
      value= {price}
      onChange={(event) => {
        setPrice(event.target.value)
      }}
      >
      </input>
      <label>Location: </label>
      <input 
      placeholder="Location"
      name="price"
      value= {location}
      onChange={(event) => {
        setLocation(event.target.value)
      }}
      >
      </input>

      {/* <select>
        
        <option value="Will Deliver" onChange={onUpdateField}>Will Deliver</option>
        <option value="Will Not Deliver" onChange={onUpdateField}>Will Not Deliver</option>
      </select> */}
    <button type="submit">Submit</button>
    </form>


    // <>
    // {post ? (<>
    // <div>
    //   <div className="box">
    //     <div>{props.allPosts.title}</div>
    //     <div>{props.allPosts.description}</div>
    //     <div>{props.allPosts.price}</div>
    //     <div>{props.allPosts.location}</div>
    //     <label htmlFor="will-deliver">Will Deliver</label>
    //     <Link to={"posts"}>
    //       <button>Go Back</button>
    //     </Link>
    // //         </div>
    //         <div className="box">
    //             <form onChange={handleChange} onSubmit={handleSubmit}>
    //                 <input id='title'defaultValue={formDetails.title}/>
    //                 <input id='description'defaultValue={formDetails.description}/>
    //                 <input id='price'defaultValue={formDetails.price}/>
    //                 <input id='location' defaultValue={formDetails.location} />
    //                 <button type='submit'>Submit</button>
    //           </form>
    //             {/* <button id={post._id ? `${post._id}` : null} onClick={(e) => { handleDelete(e) }}>Delete Post</button> */}
    //         </div>
    //         </div>,
  //       {/* </>
  //   ) : (
  //     <div>Loading your post details...</div>
  //   )}
  // </> */}
  )
}
export default PostDetails;
