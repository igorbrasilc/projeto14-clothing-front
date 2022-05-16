import styled from "styled-components";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import api from "../api.jsx";
import { AccountContainer, InputForm } from "./signup.jsx";
import UserContext from "../context/userContext.jsx";

export default function Signin() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    function submitSignin(event) {
        event.preventDefault();

        api.signin(userData).then((response) => {
            const { token, user } = response.data;
            console.log(token)
            //save token in local storage
            const toLocalStorage = {
                token,
                user
            };
            localStorage.setItem('user', JSON.stringify(toLocalStorage));
            setUser(toLocalStorage);
            navigate("/");
        }).catch((error) => {
            console.log(error);
            alert("User not found");
        })
    }

    return (
        <AccountContainer>
            <h1>Clothing</h1>
            <InputForm onSubmit={submitSignin}>
                <input type="email" placeholder="E-mail" onChange={(e) => setUserData({...userData, email: e.target.value})} required/>
                <input type="password" placeholder="Senha" onChange={(e) => setUserData({...userData, password: e.target.value})} required/>
                <button type="submit"><p>Log In</p></button>
            </InputForm>
            <h2 onClick={() => navigate("/signup")}>Create a account</h2>    
        </AccountContainer>
    );
}