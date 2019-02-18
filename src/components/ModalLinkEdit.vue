<template>

        <form class="custom-form" >
            <div class="form-group">
                <label for="wordFind">Word {{wordFind}}</label>
                <input type="text" class="form-control" id="wordFind">
            </div>
            <div class="form-group">
                <label for="dateFrom">Date {{dateFrom}}</label>
                <input type="text" class="form-control" id="dateFrom">
            </div>
            <div class="form-group">
                <label for="dateTo">Date {{showModal}}</label>
                <input type="text" class="form-control" id="dateTo">
            </div>
            <button type="submit" class="btn btn-secondary" v-on:click="updateLink(wordFind, id, dateFrom, dateTo)">{{id}}Submit</button>
        </form>

</template>
<script>
    import * as links from '../services/LinksService'
    export default{
        name: 'ModalLinkEdit',
        props:['wordFind','id' ,'dateFrom', 'dateTo'],
        methods:{
            async updateLink(wordFind, id, dateFrom, dateTo){
              await links.updateLink(wordFind, id, dateFrom, dateTo).catch(err=>{console.log(err.response)})
              await links.getLinks().then(res => {
                this.links = res.data
        }).catch(err=>{
            console.log(err)
        })
    }
 }
}


</script>