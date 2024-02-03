import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditUser.css";

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    voteTo: "",
  });

  const { username, email, voteTo } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !voteTo) {
      alert("Please enter all fields.");
      return;
    }

    await axios.put(`http://localhost:8080/user/${id}`, user);
    alert("Changes saved successfully. Your vote is successfully saved!");

    
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow edit-user-container">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="username"
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="voteTo" className="form-label">
                VoteTo
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your vote"
                name="voteTo"
                value={voteTo}
                onChange={onInputChange}
              />
            </div>
            <div className="form-buttons-container">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button
                className="btn btn-outline-danger mx-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
