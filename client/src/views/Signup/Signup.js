import React, { useState,useEffect } from "react";
import './Signup.css';
import axios from 'axios'
import Navbar from "../../componant/Navbar/Navbar";
import Footer from "../../componant/Footer/Footer";

function Signup() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');

    const loadSignup = async () => {
        if(!name){
            alert("name is required");
            return
        }
        if(!mobile){
            alert("mobile is required");
            return
        }
        if(!email){
            alert("email is required");
            return
        }
        if(!password){
            alert("password is required");
            return
        }
        if(!gender){
            alert("gender is required");
            return
        }

        const response = await axios.post('https://dollar-dash-server.onrender.com/api/signup' ,{
            name,
            mobile,
            email,
            password,
            gender
        });
        
       
        if (response?.data?.success) {
            alert(response?.data?.message);
            window.location.href = '/login'
        }
        else {
            alert(response?.data?.message);
        }
        
    }

    useEffect(()=>{
        const dataStore = JSON.parse(localStorage.getItem('user' || '{}'));
        if(dataStore?.email){
            alert('you are alredy Signup');
            window.location.href = '/'
        }
    },[])
    return (
        <>
        <Navbar/>

            <div className="signup-container">
                <span className="signup-heading">Signup</span>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" className="input-box" />
                <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} placeholder="Mobile" className="input-box" />
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className="input-box" />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" className="input-box" />
                <div cla>
                    <p className="radio-container">male <input type="radio" onChange={(e) => { setGender(e.target.value) }} checked='male' className="input-radio" value="male" name="gender" /> </p>
                    <p className="radio-container">female <input type="radio" onChange={(e) => { setGender(e.target.value) }} className="input-radio" value="female" name="gender" /></p>
                </div>

                <button type="button" className=" btn-signup" onClick={loadSignup}>signup</button>

            </div>
            <Footer/>
        </>
    )
}
export default Signup