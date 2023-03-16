<template>
  <NavBarVue/>
  <router-view/>
</template>

<script>
  import NavBarVue from './components/NavBar.vue'
  export default {
    components:{
      NavBarVue
    }
  }
</script>

<style lang="scss">
  @import '@/styles/normalize.scss';


</style>
