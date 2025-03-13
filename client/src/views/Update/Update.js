import react, { useEffect, useState } from "react";
import Navbar from "./../../componant/Navbar/Navbar";
import axios from 'axios';
import './Update.css';
import { useParams } from "react-router-dom";
import Footer from "../../componant/Footer/Footer";

function Update() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const { id } = useParams();

    const upadateData = async () => {
        const response = await axios.get(`https://dollar-dash-server.onrender.com/api/transition/${id}`);
        const { amount, type, description, category } = response?.data?.data;

        setAmount(amount)
        setType(type)
        setDescription(description)
        setCategory(category)

    }

    useEffect(() => {
        upadateData()
    }, [])

    const updateAdd = async () => {
        
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

        const response = await axios.put(`https://dollar-dash-server.onrender.com/api/transition/${id}`, {
            amount,
            type,
            description,
            category
        })

        if (response?.data?.data) {
            alert("update Successfully")
            window.location.href = 'https://dollar-dash-server.onrender.com/transition'
        }

        setAmount('')
        setCategory('')
        setType('')
        setDescription('')

    }

    return (
        <>
            <Navbar />

            <div className="mytransition-container">
               <div className="heading-contener-add"> <span>Update Transition</span></div>

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
                            <input className=" input-amount-container" type="text" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                        </div>
                    </div>

                    <div className="flex-gred">
                        <div>
                            <span className="title-font">Description :</span>
                        </div>
                        <div>
                            <textarea className=" input-amount-container " type="text" value={description} onChange={(e) => { setDescription(e.target.value) }}  ></textarea>
                        </div>
                    </div>

                    <div className="flex-gred ">
                        <div >
                            <span className="title-font">Type :</span>
                        </div>
                        <div className="crdr-flex-gred">
                            <span className="credit-debit-title">Credit  <input type="radio" value="credit" checked={type === 'credit'} onChange={(e) => { if (e.target.checked) { setType(e.target.value) } }}  name="radio" /> </span>
                            <span className="credit-debit-title">Debit <input type="radio" value="debit" checked={type === "debit"} onChange={(e) => { if (e.target.checked) { setType(e.target.value) } }} name="radio" /></span>
                        </div>
                    </div>

                   

                </div>
                <div>
                    <button className="btn btn-add" type="button" onClick={updateAdd}>Update</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Update