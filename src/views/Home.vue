<template>
    <div class="home">
        <Navbar/>
        <div class="container result">
            <div v-if="!loading" class="row">
                <p>There are 10 last news from zakupki.gov if there any information about maintaince works it may cause errors in service</p>
                <div class="alert alert-secondary result" role="alert" v-for="(news, index) in allNews"
                     :key="news._id"
                     :index="index">
                    <h5 class="card-title">{{news.description._text}}</h5>
                    <p class="card-text">{{news.pubDate._text}}</p>
                </div>
            </div>
            <div v-if="loading" class="loader">
                <vue-loading type="bars" color="#5fdd72" :size="{ width: '150px', height: '150px' }"></vue-loading>
            </div>
        </div>
        </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import * as news from '../services/GzRequestService'
    import { VueLoading } from 'vue-loading-template'
    export default {
        data:function () {
            return{
                allNews:{},
                loading:false
            }
        },
        name: 'home',
        components: {
            Navbar,
            VueLoading
        },
        mounted(){
            this.loading = true
            news.getNews()
                    .then(res => {
                        this.allNews = res.data.splice(0, 10)
                        this.loading = false
                    })
                    .catch(err=>{err})
        }
    }
</script>
