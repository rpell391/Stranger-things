import React, {useEffect, useState } from "react"
import{getPosts} from "../api-adapter"


const Posts = (props) => {
    const [allPosts, setAllPosts] = useState ([])

    console.log(allPosts)
    
    useEffect(() => {
      async function getPosts() {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-ft/posts');
        const result = await response.json()
        const posts = result.data.posts

        setAllPosts(posts)
      }
      getPosts()
    }, [])

  return (
    <div>
      I am Working

{

  //Ternary similar to puppybowl to check allPosts.length. 
allPosts.length ? allPosts.map():null
}

    </div>

  )

}


export default Posts