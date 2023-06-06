import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [active, setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        }
    });
    
    return (
        <div className={active ? "navbar active": "navbar"}>
            <div className="container">
                <Link to="/" className="link">
                    <div className="logo">
                        <span className="text">fiverr</span>
                        <span className="dot">.</span>
                    </div>
                </Link>
                <div className="links">
                    <Link to="/add" className="link">Add a gig</Link>
                    <span className="link">Gigs</span>
                    <span className="link">Gig</span>
                    <span className="link">Messages</span>
                    <span className="link">Orders</span>
                    <button className={active ? "active-button": ""}>Join</button>
                </div>
            </div>
            {   active && 
                <>
                    <div className="menu">
                        <span className="link">Graphics & Design</span>
                        <span className="link">Digital Marketing</span>
                        <span className="link">Writing & Translation</span>
                        <span className="link">Video & Animtaion</span>
                        <span className="link">Music & Video</span>
                        <span className="link">Praogramming & Tech</span>
                        <span className="link">Photography</span>
                        <span className="link">AI & Services</span>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar;