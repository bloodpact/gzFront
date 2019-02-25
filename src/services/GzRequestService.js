import store from '../store'
import axios from 'axios'
import * as auth from './AuthService'
export function gzAxiosSetup(){
    return  axios.create({
        baseURL:store.state.gzUrl,
        headers:{
            Authorization:auth.getToken()
        }
    })
}