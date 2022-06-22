import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
// TODO: This should get you started on registering a new user. 
// Add new fields depending on your server side registration
export const Register = () => {
  const username = useRef()
  const password = useRef()
  const firstname = useRef()
  const lastname = useRef()
  const email = useRef()
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
      "first_name": firstname.current.value,
      "last_name": lastname.current.value,
      "username": username.current.value,
      "password": password.current.value,
      "email": email.current.value
    }

    registerUser(newUser).then(res => {
      if ("token" in res) {
        localStorage.setItem("auth_token", res.token)
        history.push("/")
      }
    })
  }

  return (
    <main>
      <form onSubmit={handleRegister}>
        <h2>Register A New Other Worlds Account</h2>
        <div className="form-fields">
          <fieldset>
            <label htmlFor="name"> First Name </label>
            <input ref={firstname}
              type="text" className="form-control"
              placeholder="Enter your first name" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="name"> Last Name </label>
            <input ref={lastname}
              type="text" className="form-control"
              placeholder="Enter your last name" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="registerUsername">Username</label>
            <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
          </fieldset>
          <fieldset>
            <label htmlFor="registerPassword"> Password </label>
            <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
          </fieldset>
          <fieldset>
            <label htmlFor="email"> Email Address </label>
            <input ref={email} type="email" className="form-control" placeholder="Email address" required />
          </fieldset>
          <fieldset>
            <button type="submit">Register</button>
          </fieldset>

        </div>
      </form>
      <section>
        Already registered? <Link to="/login">Login</Link>
      </section>
    </main>
  )
}
