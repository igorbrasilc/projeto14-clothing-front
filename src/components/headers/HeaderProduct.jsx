import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

import UserContext from '../context/userContext.jsx';

export default function HeaderProduct() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  function checkAndGoToCart() {
    if (user.token !== '') navigate('/cart');
    else {
      const confirmation = confirm('Você não está logado, deseja fazer login?');

      if (confirmation) navigate('/signin');
    }
  }

  return (
    <HeaderWrapper>
      <IoIosArrowRoundBack onClick={() => navigate('/')} />
      <div>
        <IoCartOutline onClick={() => checkAndGoToCart()} />
        {user.token !== '' ? <span>.</span> : <></>}
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
    font-size: 32px;
    color: white;
    background-color: var(--color-theme);
    border-radius: 50%;
    padding: 3px;
    font-weight: 700;

    &:hover{
      cursor: pointer;
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
