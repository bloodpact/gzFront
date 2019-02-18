<template>
    <div>
        <form class="custom-form" v-on:submit="onSubmit">
            <div class="form-group">
                <label for="username">Login name</label>
                <input type="email" v-model="email" class="form-control" id="username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" id="password">
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
        <p>{{errorMsg}}</p>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService'

    export default{
        data:function () {
            return{
                email:'',
                password:'',
                errorMsg:null
            }
        },
        name: 'login',
        methods:{
            onSubmit:  function (e) {
                this.errorMsg = null;
                e.preventDefault();
                auth.login(this.email, this.password)
                        .then((response) => {
                const token =  response.data.token;
                auth.setToken(token)
                this.$router.push({name: 'links-all'});
            })
                .catch((err)=>{
                    this.errorMsg = err.response.data[2].message
            })

            }
        }
    }
</script>

