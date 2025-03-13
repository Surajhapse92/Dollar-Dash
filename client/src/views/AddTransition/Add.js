import React, { useEffect, useState } from "react";
import './Add.css';
import Navbar from "../../componant/Navbar/Navbar";
import Auth from './../../util/auth.js';
import axios from 'axios';
import Footer from "../../componant/Footer/Footer.js";

function Add() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('debit');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const validateInputs = () => {
        if (!type) {
            setError('Type is required');
            return false;
        }
        if (!amount || isNaN(amount)) {
            setError('Please enter a valid amount');
            return false;
        }
        if (!description) {
            setError('Description is required');
            return false;
        }
        if (!category) {
            setError('Category is required');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async () => {
        if (!validateInputs()) return;

        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        if (!userData?._id) {
            setError('User not authenticated');
            return;
        }

        try {
            const response = await axios.post('/api/transition', {
                user: userData._id,
                amount: parseFloat(amount),
                type,
                description,
                category
            });

            if (response?.data?.success) {
                alert(response.data.message);
                window.location.href = '/transition';
            } else {
                setError(response?.data?.message || 'Failed to add transaction');
            }
        } catch (err) {
            setError('An error occurred while adding the transaction');
            console.error(err);
        }
    };

    useEffect(() => {
        Auth();
    }, []);

    return (
        <>
            <Navbar />
            <div className="mytransition-container">
                <div className="heading-contener-add">
                    <span>Add Transaction</span>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="select-add-main">
                    <div className="flex-gred">
                        <div>
                            <span className="title-font">Category:</span>
                        </div>
                        <div>
                            <select
                                className="select-container-add"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                <option value="shopping">Shopping</option>
                                <option value="food">Food</option>
                                <option value="rent">Rent</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="travel">Travel</option>
                                <option value="education">Education</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex-gred">
                        <div>
                            <span className="title-font">Amount:</span>
                        </div>
                        <div>
                            <input
                                className="input-amount-container"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                            />
                        </div>
                    </div>

                    <div className="flex-gred">
                        <div>
                            <span className="title-font">Description:</span>
                        </div>
                        <div>
                            <textarea
                                className="input-amount-container"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter description"
                            />
                        </div>
                    </div>

                    <div className="flex-gred">
                        <div>
                            <span className="title-font">Type:</span>
                        </div>
                        <div className="crdr-flex-gred">
                            <span className="credit-debit-title">
                                Credit
                                <input
                                    type="radio"
                                    value="credit"
                                    checked={type === "credit"}
                                    onChange={(e) => setType(e.target.value)}
                                    name="radio"
                                />
                            </span>
                            <span className="credit-debit-title">
                                Debit
                                <input
                                    type="radio"
                                    value="debit"
                                    checked={type === "debit"}
                                    onChange={(e) => setType(e.target.value)}
                                    name="radio"
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="btn-add" type="button" onClick={handleSubmit}>
                        <span>Add</span>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Add;