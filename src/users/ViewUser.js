import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewUser.css";

export default function ViewUser() {
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    voteTo: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(response.data);
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">User ID: {user.id}</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Username:</b> {user.username}
              </li>
              <li className="list-group-item">
                <b>Email:</b> {user.email}
              </li>
              <li className="list-group-item">
                <b>Vote:</b> {user.voteTo}
              </li>
            </ul>
          </div>

          <button className="btn btn-primary my-2" onClick={handleCancel}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
