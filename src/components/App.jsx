import React from 'react';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './mains/Main.jsx';
import ProductScreen from './mains/ProductScreen.jsx';

import ResetCSS from '../assets/resetCss.js';
import GlobalStyles from '../assets/GlobalStyles.js';
import Signin from './user/signin.jsx';
import Signup from './user/signup.jsx';
import UserContext from '../context/UserContext.jsx';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <ResetCSS />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
