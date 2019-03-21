<template>
    <div>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="wordFind">Word to find</label>
                <input type="text" v-model="wordFind" class="form-control" id="wordFind">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input"  v-model="check24" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Last 24 hours</label>
            </div>
            <transition
                    enter-active-class="animated bounceIn"
                    leave-active-class="animated bounceOut"
                    appear>
            <div v-if="!check24">
                <div class="form-group">
                    <label>Date from</label>
                    <vue-datepicker-local :local="local" v-model="dateFrom"/>
                </div>
                <div class="form-group">
                    <label>Date from</label>
                    <vue-datepicker-local :local="local" v-model="dateTo" />
                </div>
            </div>
            </transition>
            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
    </div>
</template>
<script>
    import VueDatepickerLocal from 'vue-datepicker-local'
    import { mapActions } from 'vuex'
    export default{
        data:function () {
            return{
                wordFind:null,
                dateFrom:null,
                dateTo:null,
                check24:false,
                local: this.$store.state.dateLocal
            }
        },
        components:{
            VueDatepickerLocal
        },
        name: 'login',
        methods:{
                ...mapActions(['addLink']),
                onSubmit() {
                    let payload = {
                        wordFind: this.wordFind,
                        user: this.$store.state.userId,
                        dateFrom: this.dateFrom,
                        dateTo: this.dateTo,
                        check24: this.check24
                    }
                    this.$store.dispatch('addLink', payload)
                    this.addLink(this.wordFind, this.$store.state.userId, this.dateFrom, this.dateTo, this.check24);
                        this.$router.push({name: 'links-all'});
                    }
                }
    }
</script>
