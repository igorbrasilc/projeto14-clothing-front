import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './mains/Main.jsx';
import ProductScreen from './mains/ProductScreen.jsx';

import ResetCSS from '../assets/resetCss.js';
import GlobalStyles from '../assets/GlobalStyles.js';

export default function App() {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:productId" element={<ProductScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
