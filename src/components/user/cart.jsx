import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack, IoIosTrash } from 'react-icons/io';

import { MainWrapper } from '../mains/Main.jsx';
import api from "../api.jsx";
import UserContext from "../context/userContext.jsx";

export default function Cart() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        api.getCart(user.token).then((response) => {
            if(response.data != 0){setCart(response.data);}
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    //console.log(cart)
    return(
        <MainWrapper>
            <CartHeader>
                <IoMdArrowBack className='return' onClick={() => navigate("/")}/>
            </CartHeader>
            <section className="header-text">
                <h1>
                Carrinho
                {' '}
                <br />
                {' '}
                <span>de compras</span>
                </h1>
            </section>
            <ProductsSection>
                {!cart ? <h1>Carrinho está vazio</h1> :
                cart.map((item, index) => <Products key={index} item={item}/>)}
            </ProductsSection>
        </MainWrapper>
    );
}

function Products(props){
    const { item } = props;
    const [product, setProduct] = useState([]);
    useEffect(() => {
        api.getProduct(item.productId).then((response) => {
            if(response.data != 0){setProduct(response.data);}
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    console.log(product);
    return(
        <ProductDiv color={product.color}>
            <div></div>
            <img src={product.image} alt={product.name} />
            <section>
                <p>{product.name}</p>
                <p className='price'>${product.price}</p>
            </section>
            <IoIosTrash className='delete' />
        </ProductDiv>
    );

}

const ProductsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

`

const ProductDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    justify-content: space-between;
    position: relative;
    
    .delete {
        font-size: 20px;
    }

    div {
        width: 150px;
        height: 70px;
        border-radius: 0 50px 50px 0;
        position: absolute;
        z-index: -1;
        background-color: ${(props) => props.color};
    }

    img {
        width: 100px;
        height: 100px;
        margin-left: 40px;
    }

    section {
        .price{
            font-weight: 700;
        }
    }
`
const CartHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    margin: 20px 0 20px;

    .return {
        font-size: 25px;
        margin-left: 20px;
    }
`