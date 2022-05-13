import React from 'react';
import styled from 'styled-components';

import { IoIosLogIn } from 'react-icons/io';
import { IoCar, IoCartOutline } from 'react-icons/io5';

export default function HeaderMain() {
  return (
    <HeaderWrapper>
      <IoIosLogIn />
      <IoCartOutline />
      {1 === 1 ? <span>.</span> : <></>}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 10%;
  position: relative;
  
  svg {
    font-size: 25px;
  }

  span {
    position: absolute;
    right: 0;
    width: 4px;
    height: 4px;
    background-color: var(--color-theme);
  }
`;
