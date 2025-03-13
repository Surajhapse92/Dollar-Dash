import React from "react";
import './Footer.css';

const user = JSON.parse(localStorage.getItem('user' || null))

function Footer() {
    return (
        <>
            <div className="footer-con-main">
                <span className="brand-title">💲 Dollar Dash 💸</span>
                <div >
                    
                    <div className="footer-all-information">
                        <div></div>
                        <div>
                            <span className="footer-title-font">Information 👇</span>
                            <span className="footer-information-contener">
                                Using an Dollar-Dash is
                                like having a personal financial
                                assistant. It helps you spend
                                wisely, save more, and achieve
                                your dreams faster. So, start
                                tracking and take control of
                                your money today!
                            </span>
                        </div>
                        <div>
                            <span className="footer-title-font">Click Me 👇</span>
                            <div className="click-me-start-here-footer">
                                <span className="footer-sub-title">Home</span>
                                <span className="footer-sub-title">My Transition</span>
                                <span className="footer-sub-title">Add Transition</span>
                                <span className="footer-sub-title">Signup</span>
                                <span className="footer-sub-title">Login</span>
                            </div>
                        </div>
                        <div>
                            <span className="footer-title-font">Start Here 🙂</span>
                            <div  className="click-me-start-here-footer">
                                <span className="footer-sub-title">Email :{user?.email}</span>
                                <span className="footer-sub-title">Name : {user?.name}</span>
                                <span className="footer-sub-title">Mobile No :{user?.mobile}</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default Footer