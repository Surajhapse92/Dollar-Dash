import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {

    const [user, setUser] = useState({});

    useState(() => {
        const localStorageData = JSON.parse(localStorage.getItem('user' || "{}"));
        console.log(localStorageData);
        setUser(localStorageData)
    }, []);

    return (
        <>
            <div className="navbar-section">
                <span className="brand-name"><i>💲 Dollar Dash 💸</i></span>
                <span> <Link to='/' className="link-container">Home</Link></span>
                <span> <Link to='/transition' className="link-container">Mytransition</Link></span>
                <span> <Link to='/add' className="link-container" >AddTransition</Link></span>
                <span><Link to='/signup' className="link-container" >Signup</Link></span>
                <span> <Link to='/login' className="link-container" >Login </Link></span>
                <span className="user-size-logout">Hello{"  "}{user?.name || "user"}🖐🏻 </span>
                <span><p className="font-hover">
                    {
                        user?.name ? <span className="logout-con" onClick={() => { localStorage.removeItem('user'); window.localStorage.href = '/login'; }}  >LogOut
                        </span> : null
                    }
                </p></span>

            </div>

        </>
    )
}
export default Navbar