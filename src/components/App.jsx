import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './mains/Main.jsx';
import ProductScreen from './mains/ProductScreen.jsx';

import ResetCSS from '../assets/resetCss.js';
import GlobalStyles from '../assets/GlobalStyles.js';
import Signin from './user/signin.jsx';
import Signup from './user/signup.jsx';
import UserContext from './context/userContext.jsx';
import Cart from './user/cart.jsx';

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    const initialValue = JSON.parse(saved);
    return initialValue || {};
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ResetCSS />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:productId" element={<ProductScreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
