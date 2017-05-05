<template>
  <div id="app">
    <Header_J></Header_J>
    <router-view></router-view>
  </div>
</template>

<script>
import Header_J from './components/Header/Header'
export default {
  name: 'app',
  components:{
    Header_J
  }
}
</script>

<style lang="css">
@import "./assets/reset/reset.css"
</style>
