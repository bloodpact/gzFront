import store from '../store'
import axios from 'axios'
import * as auth from './AuthService'
export function axiosSetup(){
    return axios.create({
        baseURL:store.state.url,
        headers:{
            Authorization:auth.getToken()
        }
    })
}