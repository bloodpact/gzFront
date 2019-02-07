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
                <li class="nav-item">
                    <router-link to="/results" class="nav-link" exact>
                        Results
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/links" class="nav-link" exact>
                        Links
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link" exact>
                        Login
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/register" class="nav-link" exact>
                        Register
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">{{this.$store.state.userId ? this.$store.state.userId : 'User'}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>