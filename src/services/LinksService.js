import store from '../store'
import {axiosSetup}  from './RequestService'
/* eslint-disable */
export async function getLinks() {
    const result = await axiosSetup().get('links', {params: { user: store.state.userId}})
    return result
}
export function createLinks(wordFind, user, dateFrom, dateTo) {
    let data = {
        wordFind:wordFind,
        id:user,
        dateFrom: dateFrom,
        dateTo: dateTo
    };
    return axiosSetup().post('links', data)
        .catch((err)=>{
            console.log(err)
        })
}
export async function updateLink(wordFind, id, dateFrom, dateTo) {
    const result = axiosSetup().put("links/"+id,{wordFind, id, dateFrom, dateTo})
    return result
}
export function deleteLink(id) {
    return axiosSetup().delete("links/"+id)
}
export function findLink(id) {
    return axiosSetup().get("links/"+id)
}
