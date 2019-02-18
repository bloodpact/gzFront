<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" exact>
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" exact>
                        About
                    </router-link>
                </li>
                <li class="nav-item" v-if="$store.state.isLoggedIn">
                    <router-link to="/results" class="nav-link" exact>
                        Results
                    </router-link>
                </li>
                <li class="nav-item" v-if="$store.state.isLoggedIn">
                    <router-link to="/links" class="nav-link" exact>
                        Links
                    </router-link>
                </li>
                <li class="nav-item" v-if="$store.state.isLoggedIn">
                    <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
                </li>
                <li class="nav-item" v-if="!$store.state.isLoggedIn">
                    <router-link to="/login" class="nav-link" exact>
                        Login
                    </router-link>
                </li>
                <li class="nav-item" v-if="!$store.state.isLoggedIn">
                    <router-link to="/register" class="nav-link" exact>
                        Register
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">{{this.$store.state.userName ? this.$store.state.userName : 'User'}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import * as auth from '../services/AuthService'
    export default {
        name: 'Navbar',
        methods:{
            logout: function () {
                auth.logout()
                this.$router.push({name: 'home'})
            }
        }
    }
</script>