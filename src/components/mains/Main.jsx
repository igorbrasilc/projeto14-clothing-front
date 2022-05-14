import React from 'react';
import styled from 'styled-components';

import HeaderMain from '../headers/HeaderMain.jsx';
import FooterMain from '../footers/FooterMain.jsx';

// ideia para selecionar as categorias: colocar um estado categorie que é atualizado de acordo com
// string e um ternario na classe do css. () => handleCategorie('hat');

export default function Main() {
  function handleCategorie(categorie) {
    console.log(categorie);
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
        <button type="button" className="selected" onClick={() => handleCategorie('all')}>All</button>
        <button type="button" className="" onClick={() => handleCategorie('hat')}>Hats</button>
        <button type="button" className="" onClick={() => handleCategorie('bonnet')}>Bonnets</button>
        <button type="button" className="" onClick={() => handleCategorie('cap')}>Caps</button>
        <button type="button" className="" onClick={() => handleCategorie('hood')}>Hoods</button>
      </section>
      <section className="products">
        <article>
          <h2>titulo</h2>
          <p>$40</p>
          <img src="#" />
          <div className="icons">
            <p>icone1</p>
            <p>icone2</p>
          </div>
        </article>
        <article>
          <h2>titulo</h2>
          <p>$40</p>
          <img src="#" />
          <div className="icons">
            <p>icone1</p>
            <p>icone2</p>
          </div>
        </article>
      </section>
      <FooterMain />
    </MainWrapper>
  );
}

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

    article {
      height: 200px;
      padding: 40px;
      margin: 12px 20px;
      background-color: red;
      border-radius: 15px;
      position: relative;


    }
  }

  
`;
