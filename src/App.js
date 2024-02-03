import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";
import LandingPage from './components/pages/LandingPage';
import "./App.css";
import Home from './pages/Home';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Navbar from './layout/Navbar';

export default function App() {
  return (
    
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/nav" element={<Navbar/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/edituser/:id" element={<EditUser/>}/>
          <Route path="/viewuser/:id" element={<ViewUser/>}/>
          <Route path="/nav" element={<Navbar/>}/>

        </Routes>
    </Router>
  );
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>
      Designed &amp; coded by{" "}
      <a
        href="https://izemspot.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        IZEMSPOT
      </a>
    </p>
  );
};

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
};
