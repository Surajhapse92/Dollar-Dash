
import React, { useEffect, useState } from "react";
import './Add.css';
import Navbar from "../../componant/Navbar/Navbar";
import Auth from './../../util/auth.js'
import axios from 'axios'
import Footer from "../../componant/Footer/Footer.js";

function Add() {

    const [amount, setAmount] = useState('');
    const [type, setType] = useState('debit');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const loaddata = async () => {

        if (!type) {
            return alert('Type is requred');
        }
        if (!amount) {
            return alert('Amount is requred');
        }
        if (!description) {
            return alert('Description is requred');
        }
        if (!category) {
            return alert('Category is requred');
        }

        const userData = JSON.parse(localStorage.getItem('user' || '{}'))
        console.log(userData);
        const response = await axios.post('/api/transition', {
            user: userData?._id,
            amount: amount,
            type: type,
            description: description,
            category: category
        });
        if (response?.data?.success) {
            alert(response?.data?.message);
            window.location.href = '/transition'
        }
        else {
            alert(response?.data?.message);
        }
    }

    useEffect(() => {
        Auth()
    })
    return (
        <>
            <Navbar />

            <div className="mytransition-container">
               <div className="heading-contener-add"> <span>Add Transition</span></div>

                <div className="select-add-main">

                    <div className="flex-gred">
                        <div>
                            <span className="title-font">Category :</span>
                        </div>
                        <div>
                            <select className="select-container-add" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                                <option>shopping</option>
                                <option>food</option>
                                <option>rent</option>
                                <option>entertainment</option>
                                <option>travel</option>
                                <option>education</option>
                                <option>other</option>
                            </select>

                        </div>
                    </div>

                    <div className="flex-gred">
                        <div><span className="title-font">Amount :</span></div>
                        <div>
                            <input className=" input-amount-container" type="text" onChange={(e) => { setAmount(e.target.value) }} />
                        </div>
                    </div>

                    <div className="flex-gred">
                        <div>
                            <span className="title-font">Description :</span>
                        </div>
                        <div>
                            <textarea className=" input-amount-container " type="text" onChange={(e) => { setDescription(e.target.value) }}  ></textarea>
                        </div>
                    </div>

                    <div className="flex-gred ">
                        <div >
                            <span className="title-font">Type :</span>
                        </div>
                        <div className="crdr-flex-gred">
                            <span className="credit-debit-title">Credit <input type="radio" value="credit" checked={type === "credit"} onChange={(e) => { if (e.target.checked) { setType(e.target.value) } }} name="radio" /></span>
                            <span className="credit-debit-title">Debit <input type="radio"  value="debit" checked={type === "debit"} onChange={(e) => { if (e.target.checked) { setType(e.target.value) } }} name="radio" /></span>
                        </div>
                    </div>

                </div>
                <div>
                    <button className=" btn-add" type="button" onClick={loaddata}><span>Add</span> </button>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Add