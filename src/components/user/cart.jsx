import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack, IoIosTrash, IoMdAdd, IoMdRemove } from 'react-icons/io';

import { MainWrapper } from '../mains/Main.jsx';
import api from "../api.jsx";
import UserContext from "../context/userContext.jsx";

let count = 0;
let testTotal = 0;
export default function Cart() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [cart, setCart] = useState([]);
    const [update, setUpdate] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(() => {
        api.getCart(user.token).then((response) => {
            if(response.data != 0){setCart(response.data);}
        }).catch((error) => {
            console.log(error);
        })
    }, [update]);

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
                {!cart[0] ? <h1>Carrinho está vazio</h1> :
                cart.map((item, index) => <Products key={index} item={item} token={user.token} cartTotal={cartTotal} setCartTotal={setCartTotal} setUpdate={setUpdate}/>)}
            </ProductsSection>
            <CartFooter>
                <section className='cart-total'>
                    <p>{cart.length} itens</p>
                    <p className='total-price'>Total: ${cartTotal}</p>
                </section>
                <button type="button" onClick={() => "checkout"}>Checkout</button>
            </CartFooter>
        </MainWrapper>
    );
}

function Products(props){
    const { item, key, token, setUpdate, cartTotal, setCartTotal} = props;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        api.getProduct(item.productId).then((response) => {
            if(response.data != 0){setProduct(response.data);}
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    
    async function deleteFromCart(productId){  
        api.removeProduct(productId, token).then((response) =>{
            setUpdate(count++); // Updates the cart
        })
        .catch((error) => {
            console.log(error);
        })
    }

    async function editCart(productId, quantity){
        api.editCart({ productId, quantity }, token).then((response) =>{
            setUpdate(count++); // Updates the cart
            setCartTotal((parseFloat(product.price) * quantity) + cartTotal)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    useEffect(() => {
        if (typeof product.price !== "undefined"){ 
            setCartTotal((parseFloat(product.price) * parseInt(item.quantity)) + cartTotal)
        }
    }, [product.price]);

    return(
        <ProductDiv color={product.color} key={key}>
            <div></div>
            <img src={product.image} alt={product.name} />
            <section>
                <p>{product.name}</p>
                <p className='price'>${product.price}</p>
            </section>
            <article>
                <section>
                    <p>{item.quantity}</p>
                </section>
                <section className='edit-cart'>
                    <IoMdAdd onClick={() => editCart(product._id, 1)}/>
                    <IoMdRemove onClick={() => editCart(product._id, -1)}/>
                </section>
            </article>
            <IoIosTrash className='delete' onClick={() => deleteFromCart(product._id)}/>
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

    article {
        display: flex;
        flex-direction: row;
    }

    .edit-cart {
        display: flex;
        flex-direction: column;
        
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;
    margin: 20px 0 20px;


    .return {
        font-size: 25px;
        margin-left: 20px;
    }
`

const CartFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    button {
        height: 45px;
        width:100%;
        background-color: #FF233D;
        font-size: 20px;
        border-radius: 15px 15px 0 0;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }

    .cart-total {
        margin-bottom: 10px;
    }
`