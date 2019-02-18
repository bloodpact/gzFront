<template>
    <div>
        <form class="custom-form" v-on:submit="onSubmit">
            <div class="form-group">
                <label for="wordFind">Word to find</label>
                <input type="text" v-model="wordFind" class="form-control" id="wordFind">
            </div>
            <div class="form-group">
                <label for="dateFrom">Date from</label>
                <input type="text" v-model="dateFrom" class="form-control" id="dateFrom">
            </div>
            <div class="form-group">
                <label for="dateTo">Date from</label>
                <input type="text" v-model="dateTo" class="form-control" id="dateTo">
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
                wordFind:null,
                dateFrom:null,
                dateTo:null
            }
        },
        name: 'login',
        methods:{
            onSubmit:  function (e) {
                e.preventDefault();
                links.createLinks(this.wordFind, this.$store.state.userId, this.dateFrom, this.dateTo);
                this.$router.push({name: 'links-all'});
            }
        }
    }
</script>
