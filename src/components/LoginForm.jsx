import React, {useState} from "react";
import './LoginForm.css'
import { loginUser } from "../api-adapter";

const LoginForm = (props) => {

  async function handleSubmit(event) {
    event.preventDefault()
    const username= event.target[0].value
    const password = event.target[1].value
    const loginInfo=  await loginUser(username, password)
    const token = loginUser.token
    //check for error message
    localStorage.removeItem('token')
    localStorage.setItem('token', token)
    // console.log(loginInfo, "dkjflskjfkls")
  }

  const [form, setForm] = useState ({

    username: "",
    password: "",

  })

  const onUpdateField = e => {
    const nextFormState= {
      ...form,
      [e.target.name]: e.target.value
    }
    setForm(nextFormState)
  // console.log(nextFormState)
  }

  // const onSubmitForm = e => {
  //   e.preventDefault()
  //   alert(JSON.stringify(form, null, 2))
  // }

  return (
    
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="formLabel">Username</label>
          <input
          className="formField"
          type="text"
          aria-label="Username field"
          name="username"
          value={form.username}
          onChange={onUpdateField}
          />
        </div>
        <div className= "formGroup">
          <label className="formLabel">Password</label>
          <input
          className="formField"
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
          />
        </div>
        <div className= "formActions">
          <button className="formSubmitBtn" type="submit">Login</button>
        </div>
      </form>

  )

}

export default LoginForm