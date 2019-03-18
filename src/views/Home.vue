<template>
    <div class="home">
        <Navbar/>
        <div class="container result">
            <p>There are 10 last news from zakupki.gov</p>
            <p>If there any information about maintaince works it may cause errors in service</p>
            <div class="alert alert-secondary result" role="alert" v-for="(news, index) in allNews"
                 :key="news._id"
                 :index="index">
                <h5 class="card-title">{{news.description._text}}</h5>
                <p class="card-text">{{news.pubDate._text}}</p>
            </div>
        </div>
        </div>


</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import * as news from '../services/GzRequestService'
    export default {
        data:function () {
            return{
                allNews:{}
            }
        },
        name: 'home',
        components: {
            Navbar
        },
        mounted(){
            news.getNews()
                    .then(res => {
                    this.allNews = res.data.splice(0, 10)
                    console.log(res)
        })
        .catch(err=>{err})
        }


    }
</script>
