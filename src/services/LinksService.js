import store from '../store'
import {axiosSetup}  from './RequestService'
import * as auth from './AuthService'

/* eslint-disable */
export async function getLinks() {
    return await axiosSetup().get('links', {params: { user: store.state.userId}})
}
export function createLinks(wordFind, user, dateFrom, dateTo, check24) {
    let data = {
        wordFind: wordFind,
        id: user,
        dateFrom: dateFrom,
        dateTo: dateTo,
        check24: check24
    };
    return axiosSetup().post('links', data)
        .catch((err)=>{
            console.log(err)
        })
}
export  function updateLink(wordFind, id, dateFrom, dateTo, check24) {
    return   axiosSetup().put("links/"+id,
        {wordFind,
            id,
            dateFrom,
            dateTo,
            check24}).then(res=>{console.log(res)})
}
export function deleteLink(id) {
    return axiosSetup().delete("links/"+id)
}
export  function findLink(id) {
    return  axiosSetup().get("links/"+id)
}
export function findTenders(from, to) {
    return  axiosSetup().get("results", {params: {
        user: store.state.userId,
        from: from,
        to: to
    }})
}
