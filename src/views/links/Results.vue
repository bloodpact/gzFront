<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 result">
                <div class="card-elements item-list">
                    <div class="card m-2 custom" v-for="(link, index) in links"
                         :key="link._id"
                         :index="index"
                         style="width: 18rem;">
                        <div class="card-body">
                            <h5  class="card-title">{{link.title._text}}</h5>
                            <p v-html="link.description._text" class="card-text"></p>
                            <a class="card-text" :href="link.link._text">{{link.title._text}}</a>
                            <button v-on:click="addLink(link)" class="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <ul class="list-group" v-for="link in choosenLinks">
                    <li class="list-group-item"><a :href="link.link._text">{{link.title._text}}</a></li>
                </ul>
                <button v-on:click="sendMail()" class="btn btn-success">Send</button>
            </div>
        </div>
    </div>

</template>
<script>
    import * as links from '../../services/LinksService'
//    import * as viewHelper from '../../services/ViewService'
    import _ from 'lodash'
    import moment from 'moment'
    export default{
        data:function () {
            return{
                links:null,
                from:null,
                to:null,
                choosenLinks:[],
                mailLinks:[]
            }
        },
        name: 'result',
        mounted (){
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
        },
        methods:{
            addLink: function (link) {
               this.choosenLinks.push(link)
               this.mailLinks.push(link.link._text)
            },
            sendMail: function () {
                links.sendMail(this.mailLinks)
            }
        }
    }
</script>