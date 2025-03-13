import React, { useState, useEffect } from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [user, setUser] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('user') || "{}");
        setUser(localStorageData);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-section">
            <div className="navbar-brand">
                <span className="brand-name"><i>💲 Dollar Dash 💸</i></span>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>

            <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
                <Link to='/' className="link-container" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to='/transition' className="link-container" onClick={() => setIsMenuOpen(false)}>My Transactions</Link>
                <Link to='/add' className="link-container" onClick={() => setIsMenuOpen(false)}>Add Transaction</Link>
                {!user?.name ? (
                    <>
                        <Link to='/signup' className="link-container" onClick={() => setIsMenuOpen(false)}>Signup</Link>
                        <Link to='/login' className="link-container" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    </>
                ) : (
                    <span className="user-greeting">
                        Hello, {user.name} 🖐🏻
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Navbar;