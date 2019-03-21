import store from '../store'
import {axiosSetup}  from './RequestService'

/* eslint-disable */
export async function getLinks() {
    return await axiosSetup().get("links", {params: { user: store.state.userId}})
}

export async function createLinks(data) {
        return await axiosSetup().post('links', data)
        .catch((err)=>{
            console.log(err.response)
        })
}
export async function updateLink(wordFind, id, dateFrom, dateTo, check24) {
    return await axiosSetup().put("links/"+id,
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
        from,
        to
    }})
}
export async function sendMail(links) {
    return await axiosSetup().get('email', {params: {
        user: store.state.userName,
        links
    }})
}