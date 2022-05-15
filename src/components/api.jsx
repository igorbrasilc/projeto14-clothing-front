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

const api = {
    signin, signup, 
}

export default api;