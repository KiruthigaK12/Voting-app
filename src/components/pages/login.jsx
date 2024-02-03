import React, { useState } from 'react';
import {  Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function LoginForm() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmailid] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailidChange = (event) => {
    setEmailid(event.target.value);
  };


  const handleSubmit=(event)=>{
    event.preventDefault();
    const data={username,password,email};

     axios.get(`http://localhost:8080/user/log/${username}/${password}`,data).then((res)=>
    {
      if(res.data===true){
        console.log("Login Successful");
        navigate('/adduser');
      }
      else{alert('Enter valid username and password')}
    });
    };





    return (
        <div className="text-center m-5-auto">
          <h2>Sign in to us</h2>
          <form onSubmit={handleSubmit}>
            <p>
              <label>Username or email address</label><br/>
              <input
                type="text"
                name="username"
                onChange={handleUsernameChange}
                value={username}
                required
              />
            </p>
            <p>
              <label>Password</label>
              <Link to="/forget-password">
                <label className="right-label">Forget password?</label>
              </Link>
              <br/>
              <input
                type="password"
                name="password"
                onChange={handlePasswordChange}
                value={password}
                required
              />
            </p>
            <p>
              <button id="sub_btn" type="submit">Login</button>
            </p>
          </form>
          <footer>
            <p>
              First time? <Link to="/register">Create an account</Link>.
            </p>
            <p>
              <Link to="/">Back to Homepage</Link>.
            </p>
          </footer>
        </div>
      );
    }