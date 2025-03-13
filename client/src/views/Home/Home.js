import React from "react";
import './Home.css';
import Footer from "../../componant/Footer/Footer";
import Navbar from "../../componant/Navbar/Navbar";
// import Img from './math.jpg'

function Home() {
    return (
        <>
            <Navbar />
            <div className="home-image-cover">
                <div className="home-img-cover-black">
                    <span className="brand-title-home"> Dollar Dash</span>
                   <div className="home-input-contener">
                   <span className="brand-input-box-home">Search</span>
                    <span className="home-submit-btn">Submit</span>
                   </div>
                </div>
                </div>
            <Footer />
        </>
    )
}
export default Home