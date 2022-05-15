import axios from 'axios';

const URL = 'http://localhost:5000';

function config(token){
    return { headers: { authorization : `Bearer ${token}` }}
}

function signin(user) {
    return axios.post(`${URL}/signin`, (user));
}

function signup(user) {
    return axios.post(`${URL}/signup`, (user));
}

function getCart(token) {
    return axios.get(`${URL}/cart`, config(token));
}

function getProduct(id) {
    return axios.get(`${URL}/product/${id}`);
}



const api = {
    signin, signup, getCart, getProduct 
}

export default api;