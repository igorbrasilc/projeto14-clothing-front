/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { IoIosLogIn, IoIosLogOut } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

import UserContext from '../context/userContext.jsx';

export default function HeaderMain() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function checkAndGoToCart() {
    if (user.token !== '') navigate('/cart');
    else {
      const confirmation = confirm('Você não está logado, deseja fazer login?');

      if (confirmation) navigate('/signin');
    }
  }

  return (
    <HeaderWrapper>
      {user.token === '' ? <IoIosLogIn onClick={() => navigate('/signin')} /> : (
        <IoIosLogOut onClick={() => {
          setUser({ token: '', user: '' });
        }}
        />
      )}
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
