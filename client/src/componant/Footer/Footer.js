import React from "react";
import './Footer.css';

const user = JSON.parse(localStorage.getItem('user') || 'null');

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Brand Title */}
                <div className="brand-section">
                    <span className="brand-title">💲 Dollar Dash 💸</span>
                    <p className="brand-tagline">Your Personal Financial Assistant</p>
                </div>

                {/* Information Section */}
                <div className="footer-section">
                    <h3 className="footer-title">Information 👇</h3>
                    <p className="footer-description">
                        Using Dollar Dash is like having a personal financial assistant. 
                        It helps you spend wisely, save more, and achieve your dreams faster. 
                        Start tracking today and take control of your money!
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3 className="footer-title">Quick Links 👇</h3>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/transactions">My Transactions</a></li>
                        <li><a href="/add-transaction">Add Transaction</a></li>
                        <li><a href="/signup">Signup</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>

                {/* User Details Section */}
                <div className="footer-section">
                    <h3 className="footer-title">Your Details 🙂</h3>
                    <div className="user-details">
                        <p><strong>Email:</strong> {user?.email || "N/A"}</p>
                        <p><strong>Name:</strong> {user?.name || "N/A"}</p>
                        <p><strong>Mobile No:</strong> {user?.mobile || "N/A"}</p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
    <p>
        © {new Date().getFullYear()} Dollar Dash. All rights reserved. |  
        <a href="https://suraj-hapse-porfolio.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
            Suraj Hapse
        </a>
    </p>
</div>


        </footer>
    );
}

export default Footer;