<template>
    <div>
        <transition
                enter-active-class="animated lightSpeedIn"
                leave-active-class="animated lightSpeedOut"
                appear>
        >
        <form class="custom-form" v-on:submit="onSubmit(linkId.wordFind, linkId._id, linkId.dateFrom, linkId.dateTo, linkId.check24)">
            <div class="form-group">
                <label for="wordFind">Word</label>
                <input type="text" v-model="linkId.wordFind" class="form-control" id="wordFind">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input"  v-model="linkId.check24" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Last 24 hours</label>
            </div>
            <div v-if="!linkId.check24">
                <div class="form-group">
                    <label>Date from</label>
                    <vue-datepicker-local :local="local" v-model="linkId.dateFrom" />
                </div>
                <div class="form-group">
                    <label>Date to</label>
                    <vue-datepicker-local :local="local" v-model="linkId.dateTo" />
                </div>
            </div>

            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
        </transition>
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
                    check24:null,
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
            onSubmit(wordFind, id, dateFrom, dateTo, check24){
                links.updateLink(wordFind, id, dateFrom, dateTo, check24)
                this.$router.push({name: 'links-all'});
            }
        },
        mounted(){
             links.findLink(this.id)
                  .then(res => {
                     this.linkId = res.data
                     })
                 .catch(err=>{err})
        }
    }
</script>
