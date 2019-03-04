<template>
    <div class="card-elements item-list">
        <div class="card m-2 custom result" v-for="(link, index) in links"
             :key="link._id"
             :index="index"
             style="width: 18rem;">
            <div class="card-body">
                <h5  class="card-title">{{link.title._text}}</h5>
                <p v-html="link.description._text" class="card-text"></p>
                <a class="card-text" :href="'http://zakupki.gov.ru' +link.link._text">{{link.title._text}}</a>
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
    import * as viewHelper from '../../services/ViewService'
    import _ from 'lodash'
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
          this.filteredLinks
        },
        computed:{
            filteredLinks(){
                this.from = (moment(new Date()).subtract(1, 'days')).format("DD.MM.YYYY");
                this.to =  (moment(new Date())).format("DD.MM.YYYY");
                links.findTenders(this.from, this.to)
                     .then(res =>{
                    //in response from gz is empty(null) filter it
                    const links = res.data.filter(el => el !==null)
                    //remove duplicates
                    const filtered = _.uniqBy(links, 'title._text')
                    this.links = filtered
                })
            }
        }
    }
</script>