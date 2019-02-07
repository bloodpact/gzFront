import store from '../store'
import axios from 'axios'
/* eslint-disable */
export function isLoggedIn() {
    const token = localStorage.getItem(token)
    return token != null;
}

export function  login(email, password) {
    let data = {
        email: email,
        password: password
    }
   axios.post("http://localhost:5000/users/login", data)
        .then((response) => {
            // console.log(response.data)
            //возвращаем айди для стэйта, чтобы было видно нужные линкс
            getUserId(response.data)
        })
        .catch((err)=>{
            // console.log(err.response.data[2].message)
        })
}

export function register(name, email, password, password2) {
    let data = {
        name:name,
        email: email,
        password: password,
        password2:password2
    }
    axios.post("http://localhost:5000/users/register", data)
        .then((response) => {
            setToken(response)
        })
}

export function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUsername() {
    return 'Me';
}

export function getUserId(id) {
       return id;
}