import store from '../store'
import axios from 'axios'
/* eslint-disable */
export function isLoggedIn() {
    const token = localStorage.getItem(token)
    return token != null;
}

export function getLinks(id) {
        axios.get("http://localhost:5000/links",{params: { user: id}})
        .then((response) => {
            console.log(response)
        })
}

export function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUsername() {
    return 'Me';
}

export function getUserId() {
    return 1;
}