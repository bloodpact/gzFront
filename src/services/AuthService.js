import store from '../store'
import jwt from 'jsonwebtoken'
import {axiosSetup}  from './RequestService'
/* eslint-disable */
export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login(email, password) {
    let data = {
        email: email,
        password: password
    };
    return axiosSetup().post('/users/login', data)
}
export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
}

export function register(name, email, password, password2) {
    let data = {
        name:name,
        email: email,
        password: password,
        password2:password2
    };
    axiosSetup().post('/users/register', data)
        .then((response) => {
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
}

export function setToken(token) {
    localStorage.setItem('token',token);
    store.dispatch('authenticate');
}
export function getToken() {
    return localStorage.getItem('token')
}

export function getUsername() {
    const token = decodeToken();
    if (!token){
        return null
    }
    return token.name
}

export function getUserId() {
    const token = decodeToken();
    if (!token){
        return null
    }
    return token._id
}
export function decodeToken() {
    const token = getToken();
    if(!token){
        return null
    }
    return jwt.decode(token)
}