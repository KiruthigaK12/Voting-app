import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddUser.css";
import BackgroundImage from '../assets/images/bg.png';

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    voteTo: "",
  });

  const { username, email, voteTo } = user;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "voteTo") {
      alert("Your vote is saved. Thanks for participating!");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !voteTo) {
      alert("Please enter all fields.");
      return;
    }

    await axios.post("http://localhost:8080/user", user);
    alert("Your vote has been saved. Thanks for participating!");

    navigate("/home"); // Navigate to "/home" route
  };

  return (
    <div className="back">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register your votes!</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Who would you vote for as Prime Minister?
              </label>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="voteTo"
                  id="option1"
                  value="Candidate A"
                  checked={voteTo === "Candidate A"}
                  onChange={(e) => onInputChange(e)}
                />
                <label className="form-check-label" htmlFor="option1">
                  Candidate A
                </label>
              </div>
              
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="voteTo"
                  id="option2"
                  value="Candidate B"
                  checked={voteTo === "Candidate B"}
                  onChange={(e) => onInputChange(e)}
                />
                <label className="form-check-label" htmlFor="option2">
                  Candidate B
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="voteTo"
                  id="option3"
                  value="Candidate C"
                  checked={voteTo === "Candidate C"}
                  onChange={(e) => onInputChange(e)}
                />
                <label className="form-check-label" htmlFor="option3">
                  Candidate C
                </label>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              <Link className="btn btn-danger btn-red" to="/">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
const HeaderStyle = {
  width: "100%",
  height: "15cm",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "cover",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position:"absolute"
 
  
}
