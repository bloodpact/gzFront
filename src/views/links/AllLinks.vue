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
                <transition
                        enter-active-class="animated lightSpeedIn"
                        leave-active-class="animated lightSpeedIn"
                        appear>
                <div class="card-body">
                    <h5 class="card-title">{{link.wordFind}}</h5>
                    <p class="card-text">{{link.link}}</p>
                    <p class="card-text">{{link.dateFrom}}</p>
                    <p class="card-text">{{link.dateTo}}</p>
                    <router-link :to="'/links/edit/' + link._id"  exact>
                        <button class="btn btn-secondary"  >Edit </button>
                    </router-link>
                    <button v-on:click="deleteLink(link._id)"  class="btn btn-danger">Delete</button>
                </div>
                </transition>
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
        mounted (){
             links.getLinks()
                  .then(res => {
                    this.links = res.data
                  })
                  .catch(err=>{console.log(err)})
        },
        methods:{
            async deleteLink(id){
                await links.deleteLink(id)
                await links.getLinks()
                           .then(res => {
                            this.links = res.data
                            })
            }
        }
    }
</script>

