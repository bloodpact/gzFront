<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 result">
                <transition
                        enter-active-class="animated shake"
                        leave-active-class="animated lightSpeedOut"
                        appear>
                    <div class="position-fixed screenCenter" v-if="errors!=null">
                        <p class="alert alert-danger">{{errors}}</p>
                    </div>
                </transition>
                <div class="card-elements item-list">
                    <div class="card m-2 custom" v-for="(link, index) in links"
                         :key="link._id"
                         :index="index"
                         style="width: 18rem;">
                        <transition name="slide-fade" appear>
                        <div class="card-body">
                            <h5  class="card-title">{{link.title._text}}</h5>
                            <p v-html="link.description._text" class="card-text"></p>
                            <a class="card-text" :href="link.link._text">{{link.title._text}}</a>
                            <br>
                            <button @click="addLink(link)" class="btn btn-success">Add</button>
                        </div>
                        </transition>
                    </div>
                </div>
            </div>

            <div class="col-sm-4 " v-if="choosenLinks.length > 0">
                <div class="position-fixed m-2 custom">
                    <ul class="list-group">
                        <transition-group name="slide-fade" appear>
                            <li
                                    v-for="(link, index) in choosenLinks"
                                    class="list-group-item"
                                    :key="link.link._text">
                                <a :href="link.link._text">{{link.title._text}}</a>
                                <br>
                                <button @click="removeLink(index)" class="btn btn-danger">Remove</button>
                            </li>
                        </transition-group>

                    </ul>
                    <button v-on:click="sendMail()" class="btn btn-success">Send</button>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
    import * as links from '../../services/LinksService'
    import _ from 'lodash'
    import moment from 'moment'
    export default{
        data:function () {
            return{
                links:null,
                from:null,
                to:null,
                choosenLinks:[],
                mailLinks:[],
                errors:null
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
            addLink(link) {
                if(_.includes(this.mailLinks, link.link._text)){
                   this.errors = 'already added'
                }else{
                    this.errors = null
                    this.choosenLinks.push(link)
                    this.mailLinks.push(link.link._text)
                }


            },
            removeLink(index) {
                this.choosenLinks.splice(index, 1)
                this.mailLinks.splice(index, 1)
                console.log(this.mailLinks)
            },
            sendMail(){
                links.sendMail(this.mailLinks)
            }
        }
    }
</script>