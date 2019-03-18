<template>
  <div id="app">
    <Navbar/>
    <Footer/>
    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'home',
    components: {
      Navbar,
      Footer
    },
    beforeCreate:function () {
      this.$store.dispatch('authenticate')
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
