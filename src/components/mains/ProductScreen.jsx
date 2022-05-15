import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import HeaderProduct from '../headers/HeaderProduct.jsx';
import FooterProduct from '../footers/FooterProduct.jsx';

export default function ProductScreen() {
  const { productId } = useParams(); // pega o id do produto direcionado
  console.log(productId);

  return (
    <ProductWrapper>
      <HeaderProduct />
      <ProductImg>
        <img src="https://i.ibb.co/Mhj6wTv/ok-25.png" alt="dasdsa" />
      </ProductImg>
      <section className="product-description">
        <h1>Titulo</h1>
        <p className="price">price</p>
        <h2>Description dhasjkdas dsakjh dsadsa asdsadsad asdsa asdas asdsa asd asd a</h2>
        <div className="quantity-container">
          <p>Quantity</p>
          <div className="buttons">
            <button type="button" className="decrease-button">-</button>
            <span>10</span>
            <button type="button" className="increase-button">+</button>
          </div>
        </div>
      </section>
      <FooterProduct />
    </ProductWrapper>
  );
}

const ProductImg = styled.section`
position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: 480px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  z-index: 0;

  img {
    width: 200px;
    height: 200px;
  }
`;

const ProductWrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
max-width: 480px;
height: 100vh;
font-family: var(--font);

.product-description {
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 50vh;
  border-radius: 35px;
  background-color: white;

  h1 {
    position: inherit;
    top: 25px;
    left: 25px;
    font-weight: 700;
  }

  .price {
    position: inherit;
    top: 40px;
    right: 25px;
  }

  h2 {
    position: inherit;
    margin-right: 10px;
    top: 75px;
    left: 10px;
    text-align: center;
  }

  .quantity-container {
    position: inherit;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    bottom: 80px;
    left: 15px;

    .buttons {
      display: flex;
      width: 20%;
      justify-content: space-evenly;
      align-items: center;

      button {
        margin: 4px;
        border: none;
        background-color: var(--color-theme);
        padding-right: 4px;
        padding-left: 4px;
        color: white;
        border-radius: 5px;

        &:hover {
          cursor: pointer;
        }
      }

      span {
        padding: 4px;
        background-color: var(--color-theme);
        color: white;
        font-weight: 700;
        border-radius: 5px;
      }
    }
  }
}
`;
