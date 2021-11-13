import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-center my-5">
            <div className="error">
                <img src="https://i.ibb.co/nn2hTVT/404.png" alt="" srcset="" />
            </div>
            <div className="my-5">
                <h1>Page not found 404!</h1>
                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            </div>

            <NavLink className="mx-2 home-btn" exact to="/" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>BACK TO HOMEPAGE</NavLink>

        </div>
    );
};

export default NotFound;