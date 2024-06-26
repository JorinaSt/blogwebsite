import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="auth">
    <h1>Login</h1>
    <form>
      <input
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
      />
      <button type="submit">Login</button>
      <p> This is an error!</p>
      <span>Don't you have an account? <Link to="/register">Register</Link></span>
    </form>
  </div>
);
}

export default Login