<template>
    <div>
        <form class="custom-form" v-on:submit="onSubmit">
            <div class="form-group">
                <label for="username">User name</label>
                <input type="text" v-model="name" class="form-control" id="username">
            </div>
            <div class="form-group">
                <label for="username">Email</label>
                <input type="email" v-model="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" id="password">
            </div>
            <div class="form-group">
                <label for="password2">Reapeat password</label>
                <input type="password" v-model="password2" class="form-control" id="password2">
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService'
    export default{
        data:function () {
            return{
                name:'',
                email:'',
                password:'',
                password2:''
            }
        },
        name: 'login',
        methods:{
            onSubmit: function (e) {
                e.preventDefault();
                auth.register(this.name, this.email, this.password, this.password2)
                this.$router.push({name: 'links'})
            }
        }
    }
</script>
