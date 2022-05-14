import React from 'react';
import styled from 'styled-components';

import { IoIosLogIn, IoIosContact } from 'react-icons/io';
import { IoCar, IoCartOutline } from 'react-icons/io5';

export default function HeaderMain() {
  return (
    <HeaderWrapper>
      {1 === 1 ? <IoIosLogIn /> : <IoIosContact />}
      <div>
        <IoCartOutline />
        {1 === 1 ? <span>.</span> : <></>}
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 10%;
  
  svg {
    font-size: 25px;

    &:hover{
      cursor: pointer;
      font-size: 30px;
    }
  }

  div {
    position: relative;

    span {
      position: absolute;
      right: 0;
      top: 2px;
      width: 8px;
      height: 8px;
      background-color: var(--color-theme);
      border-radius: 50%;
    }
  }
`;
