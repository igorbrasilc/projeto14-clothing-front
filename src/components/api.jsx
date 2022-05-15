import axios from 'axios';

const URL = 'localhost:5000';

function config(token){
    return { headers: { authorization : `Bearer ${token}` }}
}

function signin(user) {
    return axios.post(`${URL}/login`, (user));
}

function signup(user) {
    return axios.post(`${URL}/signup`, (user));
}

const api = {
    signin, signup, 
}

export default api;