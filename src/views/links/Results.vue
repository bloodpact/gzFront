<template>
    <div class="card-elements item-list">
        <div class="card m-2 custom" v-for="(link, index) in links"
             :key="link._id"
             :index="index"
             style="width: 18rem;">
            <div class="card-body" v-if="links !== null">
                <h5  class="card-title">{{link.title._text}}</h5>
                <p v-html="link.description._text" class="card-text"></p>
                <p class="card-text">{{link.link._text}}</p>
                <router-link :to="'/links/edit/' + link._id"  exact>
                    <button class="btn btn-secondary"  >Edit </button>
                </router-link>
                <button v-on:click="deleteLink(link._id)"  class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
    import * as links from '../../services/LinksService'
    import moment from 'moment'
    export default{
        data:function () {
            return{
                links:null,
                from:null,
                to:null
            }
        },
        name: 'result',
        mounted (){
            this.from =  (moment(new Date()).subtract(1, 'days')).format("DD.MM.YYYY");
            this.to =  (moment(new Date())).format("DD.MM.YYYY");
            links.findTenders(this.from, this.to)
                    .then(res =>{
                //in response from gz is empty(null) filter it
                this.links = res.data.filter(el => el !==null)
            })
        }
    }
</script>