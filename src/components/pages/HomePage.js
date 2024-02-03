import React from 'react'
import { Link } from 'react-router-dom'
import  '../pages/App1.css';

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title"><center>welcome to our app</center></h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
