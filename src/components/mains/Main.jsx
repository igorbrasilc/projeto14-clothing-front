import React from 'react';
import styled from 'styled-components';

import HeaderMain from '../headers/HeaderMain.jsx';
import FooterMain from '../footers/FooterMain.jsx';

export default function Main() {
  return (
    <MainWrapper>
      <HeaderMain />
      <h1>Aqui é o Main</h1>
      <FooterMain />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
max-width: 480px;
height: 100vh;
`;
