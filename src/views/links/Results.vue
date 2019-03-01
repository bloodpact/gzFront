<template>
    <div class="card-elements item-list">
        <div class="card m-2 custom" v-for="(link, index) in links"
             :key="link._id"
             :index="index"
             style="width: 18rem;">
            <div class="card-body">
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
    export default{
        data:function () {
            return{
                links:null,
                dates: this.$store.state.dates,
                from:null,
                to:null
            }
        },
        name: 'result',
        mounted (){
//            if(this.dates !== false){
//                this.from = '20.02.2019'
//                this.to = '21.02.21019'
//            }
            links.findTenders(this.from, this.to)
                    .then(res =>{
                    console.log(res)
                    this.links = res.data
            })
        }
    }
</script>