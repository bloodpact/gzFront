<template>
    <div>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/links/new" class="nav-link" exact>
                    Create
                </router-link>
            </li>
        </ul>
        <div class="card-elements">
            <div class="card m-2 custom" v-for="(link, index) in links"
                 :key="link._id"
                 :index="index"
                 style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{link.wordFind}}</h5>
                    <p class="card-text">{{link.link}}</p>
                    <p class="card-text">{{link.dateFrom}}</p>
                    <p class="card-text">{{link.dateTo}}</p>
                    <button class="btn btn-secondary" v-on:click="showOne(link._id)" data-toggle="modal" data-target="#exampleModal">Edit </button>
                    <button v-on:click="deleteLink(link._id)"  class="btn btn-danger">Delete</button>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form class="custom-form">
                            <div class="form-group">
                                <label for="wordFind">Word</label>
                                <input v-model="linkId.wordFind" type="text" class="form-control" id="wordFind">
                            </div>
                            <div class="form-group">
                                <label for="dateFrom">Date from</label>
                                <input type="text" v-model="linkId.dateFrom" class="form-control" id="dateFrom">
                            </div>
                            <div class="form-group">
                                <label for="dateTo">Date from</label>
                                <input type="text" v-model="linkId.dateTo" class="form-control" id="dateTo">
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" v-on:click="updateLink(linkId.wordFind, linkId._id, linkId.dateFrom, linkId.dateTo)" data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as links from '../../services/LinksService'
    export default{
        data:function () {
            return{
                links:null,
                linkId:{
                    wordFind:null,
                    dateFrom:null,
                    dateTo:null,
                    _id:null
                }
            }
        },
        name: 'all-links',
        created(){
            links.getLinks()
                 .then(res => {
                     this.links = res.data
            })
        },
        methods:{
            async deleteLink(id){
                await links.deleteLink(id)
                await links.getLinks()
                           .then(res => {
                            this.links = res.data
                            })
            },
            async updateLink(wordFind, id, dateFrom, dateTo){
                await links.updateLink(wordFind, id, dateFrom, dateTo)
                await links.getLinks()
                           .then(res => {
                            this.links = res.data
                            })
            },
            async showOne(id){
                await links.findLink(id)
                           .then(res =>{
                            this.linkId = res.data
                })
        }
    }
    }
</script>

