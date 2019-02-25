<template>
    <div>
        <form class="custom-form" v-on:submit="onSubmit(linkId.wordFind, linkId._id, linkId.dateFrom, linkId.dateTo)">
            <div class="form-group">
                <label for="wordFind">Word</label>
                <input type="text" v-model="linkId.wordFind" class="form-control" id="wordFind">
            </div>
            <div class="form-group">
                <label for="dateFrom">Date from</label>
                <input type="text" v-model="linkId.dateFrom"  class="form-control" id="dateFrom">
            </div>
            <div class="form-group">
                <label for="dateTo">Date from</label>
                <input type="text" v-model="linkId.dateTo" class="form-control" id="dateTo">
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
    </div>
</template>
<script>
    import * as links from '../../services/LinksService'

    export default{
        data:function () {
            return{
                id:this.$router.currentRoute.params['id'],
                linkId:{
                    wordFind:null,
                    dateFrom:null,
                    dateTo:null,
                    _id:null
                }
            }
        },
        name: 'edit-link',
        methods:{
            onSubmit(wordFind, id, dateFrom, dateTo){
                links.updateLink(wordFind, id, dateFrom, dateTo)
                this.$router.push({name: 'links-all'});//
            },
            showOne: function (id) {
                links.findLink(id)
                        .then(res =>{
                        this.linkId = res.data
                })
                .catch (err =>{err})
            }
        },
          mounted(){
             links.findLink(this.id)
                 .then(res =>{
                 this.linkId = res.data
                 })
             .catch(err=>{err})
        }
    }
</script>
