import React from 'react';
import styled from 'styled-components';

import { IoIosArrowRoundBack} from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

export default function HeaderProduct() {
  return (
    <HeaderWrapper>
      <IoIosArrowRoundBack />
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
  z-index: 1;
  
  svg {
    font-size: 25px;
    color: white;
    background-color: var(--color-theme);
    border-radius: 50%;
    padding: 3px;
    font-weight: 700;

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
      background-color: black;
      border-radius: 50%;
    }
  }
`;