import React from 'react';
import styled from 'styled-components';

import {IoIosHome} from 'react-icons/io';

export default function FooterMain() {
    return (
      <FooterWrapper>
        <IoIosHome />
      </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 50px;
  background-color: var(--color-theme);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;

  svg {
    font-size: 20px;
    color: white;
    
    &:hover {
      cursor: pointer;
    }
  }
`