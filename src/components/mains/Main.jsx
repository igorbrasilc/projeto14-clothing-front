import React from 'react';
import styled from 'styled-components';

import HeaderMain from '../headers/HeaderMain.jsx';
import FooterMain from '../footers/FooterMain.jsx';

export default function Main() {
  return (
    <>
      <HeaderMain />
      <MainWrapper>
        <h1>Aqui é o Main</h1>
      </MainWrapper>
      <FooterMain />
    </>
  );
}

const MainWrapper = styled.main`

`;
