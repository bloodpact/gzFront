import store from '../store'
import {axiosSetup}  from './RequestService'
export async function getNews() {
    return await axiosSetup().get("news")
}