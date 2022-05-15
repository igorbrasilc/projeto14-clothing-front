import styled from "styled-components";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import api from "../api.jsx";

export default function Signup() {
    const navigate = useNavigate();
    const userData = useState({
        name: '',
        email: '',
        password: '',
        confirPassword: ''
    });

    function registerUser(event) {
        event.preventDefault();

        if(parseInt(userData.password) === parseInt(confirmPassword)){
            api.signup(userData).then((e) => {
                console.log(e)
                alert("User created successfully");
                navigate("/");
            }).catch((error) => {
                console.log(error);
                alert(error.message);
            })
        }else {
            alert("Passwords do not match");
        }
    }

    return (
        <AccountContainer>
            <h1>Clothing</h1>
            <InputForm onSubmit={registerUser}>
                <input type="text" placeholder="Name" onChange={(e) => setUserData({...userData, username: e.target.value})} required />
                <input type="email" placeholder="E-mail" onChange={(e) => setUserData({...userData, email: e.target.value})} required />
                <input type="password" placeholder="Password" onChange={(e) => setUserData({...userData, password: e.target.value})} required />
                <input type="password" placeholder="Confirm password" onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})} required />
                <button type="submit"><p>Sign Up</p></button>
            </InputForm>
            <h2 onClick={() =>  navigate("/signin")}>Already have an account? Log in</h2>
        </AccountContainer>
    );
}

const AccountContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        margin-bottom: 24px;
        font-family: 'Permanent Marker';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        color: #FF233D;
    }
    h2 {
        margin-top: 36px;
        color: #FFFFFF;
    }
`

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    input {
        border: 1px solid #FF233D;
        border-radius: 5px;
        outline: none;
        padding: 10px;
        font-size: 20px;
        height: 45px;
        margin-bottom: 6px;
    }
    input::placeholder{
        color: #000000;
    }
    button {
        height: 45px;
        background-color: #FF233D;
        font-size: 20px;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }
`

export { AccountContainer, InputForm };