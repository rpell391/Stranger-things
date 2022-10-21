import React from "react"
import {registerUser} from "../api-adapter"


const Register = (props) => {

  async function handleSubmit(event) {
    event.preventDefault()
    const username= event.target[0].value
    const password = event.target[1].value
    const registeredUser=  await registerUser(username, password)
    const token = registeredUser.token
    //check for error message
    localStorage.removeItem('token')
    localStorage.setItem('token', token)
    // console.log(registeredUser, "dkjflskjfkls")
    
  }


  return (
    <div>
      <h2>I am the Register Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input 
        id="username" 
        type="text"
        required
        />
         <label htmlFor="password">Password: </label>
        <input 
        id="password" 
        type="password"
        required
        />
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default Register