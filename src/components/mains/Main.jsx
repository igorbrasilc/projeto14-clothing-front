/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import styled from 'styled-components';
import axios from 'axios';

import { IoIosAdd } from 'react-icons/io';

import HeaderMain from '../headers/HeaderMain.jsx';
import FooterMain from '../footers/FooterMain.jsx';

export default function Main() {
  const URL = 'http://localhost:5000/';
  const navigate = useNavigate();

  const [cssCategorie, setCssCategorie] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  function getDescription(productId) {
    navigate(`/product/${productId}`);
  }

  async function handleCategorie(categorie) {
    setCssCategorie(categorie);

    if (categorie === 'all') {
      try {
        await axios.get(URL)
          .then((response) => setProducts(response.data));
      } catch (e) {
        console.log('Erro', e);
      }
    } else {
      try {
        await axios.get(`${URL}products/${categorie}`)
          .then((response) => setProducts(response.data));
      } catch (e) {
        console.log('Erro', e);
      }
    }
  }

  return (
    <MainWrapper>
      <HeaderMain />
      <section className="header-text">
        <h1>
          Nossos
          {' '}
          <br />
          {' '}
          <span>produtos</span>
        </h1>
      </section>
      <section className="categories">
        <button type="button" className={cssCategorie === 'all' ? 'selected' : ''} onClick={() => handleCategorie('all')}>All</button>
        <button type="button" className={cssCategorie === 'hat' ? 'selected' : ''} onClick={() => handleCategorie('hat')}>Hats</button>
        <button type="button" className={cssCategorie === 'bonnet' ? 'selected' : ''} onClick={() => handleCategorie('bonnet')}>Bonnets</button>
        <button type="button" className={cssCategorie === 'cap' ? 'selected' : ''} onClick={() => handleCategorie('cap')}>Caps</button>
        <button type="button" className={cssCategorie === 'hood' ? 'selected' : ''} onClick={() => handleCategorie('hood')}>Hoods</button>
      </section>
      <section className="products">
        {products.map((product) => (
          <ProductWrapper bgColor={product.color}>
            <h2>{product.name}</h2>
            <p className="price">
              $
              {parseInt(product.price.replace(',', '.')).toFixed(0)}
            </p>
            <img src={product.image} alt={product.name} />
            <IoIosAdd onClick={() => getDescription(product._id)} />
          </ProductWrapper>
        ))}
      </section>
      <FooterMain />
    </MainWrapper>
  );
}

const ProductWrapper = styled.article`
      height: 200px;
      padding: 70px;
      margin: 12px 20px;
      background-color: ${(props) => props.bgColor};
      border-radius: 15px;
      position: relative;

        h2 {
          position: absolute;
          /* word-break: break-all; */
          line-height: 20px;
          font-size: 15px;
          font-weight: 400;
          top: 40px;
          left: 10px;
          z-index: 1;
        }

        .price {
          position: absolute;
          font-size: 20px;
          font-weight: 700;
          top: 15px;
          right: 15px;
          margin-left: 5px;
        }

        img {
          width: 100px;
          height: 100px;
          position: absolute;
          top: 75px;
          right: -20px;
        }

        svg {
          position: absolute;
          bottom: -2px;
          left: 15px;
          background-color: white;
          color: black;
          border-radius: 5px;
          font-size: 26px;

          &:hover {
          cursor: pointer;
          }
        }
`;

const MainWrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
max-width: 480px;
height: 100vh;
font-family: var(--font);

  .header-text h1 {
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: 21px;
    line-height: 20px;

    span {
      font-weight: 700;
      margin-left: 20px;
    }
  }

  .categories {
    display: flex;
    width: 100vw;
    height: auto;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scrollbar-color: var(--color-theme) white;
    scrollbar-width: thin;
    margin-bottom: 5px;

    button {
      height: 35px;
      margin: 10px 20px;
      border-radius: 15px;
      border: none;
      background-color: #F5F5F5;
      font-size: 100%;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 100;
      color: #C4C4C4;

      &:hover{
        cursor: pointer;
      }
    }

    .selected {
        background-color: var(--color-theme);
        color: white;
        box-shadow: 0px 0px 2px 2px rgba(0,0,0, 0.2);
      }
  }

  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100vw;
    height: auto;
    overflow: auto;
    scrollbar-color: var(--color-theme) white;
    scrollbar-width: thin;
  }
`;

export { MainWrapper };
