<template>
  <div id="app">
    <HeaderComp/>
    <MainComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

import axios from 'axios' 

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  },
  data() {
    return {

    }
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      console.log(response)
    } )
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
