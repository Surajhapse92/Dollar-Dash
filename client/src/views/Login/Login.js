import react, { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';
import Navbar from '../../componant/Navbar/Navbar';
import Footer from '../../componant/Footer/Footer';

function Login (){
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('');

    const loadLogin = async ()=>{
        if(!email){
            return alert('Email is required')
        }
        if(!password){
            return alert('Password is required')
        }
        const response = await axios.post('/api/login',{
            email,
            password,
        });
        if(response.data.success){
            localStorage.setItem('user' , JSON.stringify(response?.data?.data))
            alert(response?.data?.message);
            window.location.href = '/';
        }
           }

           useEffect(()=>{
            const userdata = JSON.parse(localStorage.getItem('user' || '{}'))
            if(userdata?.email){
                alert('you are alred logged in');
                window.location.href = '/'
            }
           },[])
    return(
        <>
        <Navbar/>
            <div>
                
                <div className='login-container'>
                <span className='login-heading'>Login</span>
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className='login-input' />
                    <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' className='login-input' />
                    <button type='button' className='btn-login' onClick={loadLogin} >Login</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Login