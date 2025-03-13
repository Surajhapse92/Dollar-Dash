import React, { useEffect } from "react";
import Navbar from "../../componant/Navbar/Navbar";
import App from "../../App";
import Auth from './../../util/auth.js'
import './Mytransition.css';
import Footer from "../../componant/Footer/Footer.js";

function Mytransition() {
    useEffect(() => {
        Auth()
    }, [])
    return (
        <>
            <div>
                <Navbar />
                <h1 className="text-center-mycontainer">Mytransition</h1>
                <App />
                <Footer />
            </div>
            
        </>
        
    )
}
export default Mytransition
