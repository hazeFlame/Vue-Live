<template lang="html">
  <section v-bind:class="[close?lefttrue:leftfalse]">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'home',
  data(){
    return {
      lefttrue:'lefttrue',
      leftfalse:'leftfalse'
    }
  },
  computed: {
    ...mapGetters({
      close:'closelist',
    })
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
