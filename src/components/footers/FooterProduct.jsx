import React from 'react';
import styled from 'styled-components';

import { IoIosCart } from 'react-icons/io';

export default function FooterProduct() {
  return (
    <FooterWrapper>
      <IoIosCart />
      <p>Adicionar ao carrinho</p>
    </FooterWrapper>
  );
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
  z-index: 3;

  &:hover {
      cursor: pointer;
    }

  p {
    font-size: 17px;
    color: white;
  }

  svg {
    font-size: 20px;
    color: white;
    margin-right: 5px;
  }
`;
