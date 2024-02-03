import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handleSubmit=(event)=>{
    event.preventDefault();
    const data={username,password,email};

     axios.post(`http://localhost:8080/user/adduser`,data).then((res)=>
    {
      {alert('SignUp Successful')}
    });
    };

  return (
    <div className="text-center m-5-auto">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label><br />
          <input
            type="text"
            name="username"
            onChange={handleUsernameChange}
            value={username}
            required
          />
        </p>
        <p>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </p>
        <p>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
            required
          />
        </p>
        <p>
          <button type="submit">Sign Up</button>
        </p>
      </form>
      {<p>Signup successful! Please login to continue.</p>}
      <footer>
        <p>
          Already have an account? <Link to="/login">Login</Link>.
        </p>
      </footer>
    </div>
  );
}