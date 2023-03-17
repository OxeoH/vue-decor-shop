<template>
  <NavBarVue/>
  <div class="layout">
    <router-view/>
  </div>
  
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
  body{
    background-color:darkslategrey;
  }

  #app{
    max-width: 80vw;
    margin: 0 auto;
  }

  .layout{
    padding-top: 120px; 
  }

</style>
