<template lang="html">
  <section v-bind:class="[close?lefttrue:leftfalse]">
    <h1 v-if="home">首页什么都没有</h1>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      home: true,
      lefttrue: 'lefttrue',
      leftfalse:'leftfalse'
    }
  },
  created(){
    this.$route.path == '/'?this.home = true:this.home = false
  },
  computed: {
    ...mapGetters({
      close: 'closelist',
    })
  },
  watch:{
    $route:function(){
      this.$route.path == '/'?this.home = true:this.home = false
    }
  }
}
</script>

<style lang="stylus" scoped>
   .lefttrue
      margin-left 0px
      transition .3s all ease
   .leftfalse
      margin-left 300px
      transition .3s all ease
      .router-fade-enter-active
        transition opacity .3s
      .router-fade-leave-active
        transition opacity .3s
      .router-fade-enter
        opacity 0
      .router-fade-leave-active
        opacity 0
</style>
