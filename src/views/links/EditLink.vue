<template>
    <div>
        <form class="custom-form" v-on:submit="onSubmit(linkId.wordFind, linkId._id, linkId.dateFrom, linkId.dateTo)">
            <div class="form-group">
                <label for="wordFind">Word</label>
                <input type="text" v-model="linkId.wordFind" class="form-control" id="wordFind">
            </div>
            <div class="form-group">
                <label>Date from</label>
                <vue-datepicker-local :local="local" v-model="linkId.dateFrom" />
            </div><label>Date from</label>
            <div class="form-group">
                <label>Date to</label>
                <vue-datepicker-local :local="local" v-model="linkId.dateTo" />
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
    </div>
</template>
<script>
    import * as links from '../../services/LinksService'
    import VueDatepickerLocal from 'vue-datepicker-local'
    export default{
        data:function () {
            return{
                id:this.$router.currentRoute.params['id'],
                linkId:{
                    wordFind:null,
                    dateFrom:null,
                    dateTo:null,
                    _id:null
                },
                local: this.$store.state.dateLocal
            }
        },
        components:{
            VueDatepickerLocal
        },
        name: 'edit-link',
        methods:{
            onSubmit(wordFind, id, dateFrom, dateTo){
                links.updateLink(wordFind, id, dateFrom, dateTo)
                this.$router.push({name: 'links-all'});//
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
