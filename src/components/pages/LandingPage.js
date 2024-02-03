import React from 'react'
import { Link } from 'react-router-dom'

import  '../pages/App1.css';
import BackgroundImage from '../../assets/images/bg.png';


export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title">welcome to ITC</h1>
            <p className="main-para text-center">join us now for best service</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
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