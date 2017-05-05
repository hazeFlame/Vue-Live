<template lang="html">
  <section>
    <div class="logo">
      <mu-list-item title="">
        <div class="title">
          <img :src="logo.image" alt="">
          <router-link :to="`/website/?title=${logo.code}&site=${logo.id}`">
            <span>点击进入 <i class="fa fa-angle-right"></i></span>
          </router-link>
        </div>
      </mu-list-item>
    </div>
    <mu-row gutter>
      <mu-col width="100" tablet="50" desktop="25" v-for="list in lists" :key="list.id">
        <mu-list-item title="">
          <div class="">
            <router-link :to="`/${logo.code}/${list.id}?site=${logo.id}`">
              <img :src="list.image" alt="">
            </router-link>
          </div>
          <div class="info">
            <router-link :to="`/${logo.code}/${list.id}?site=${logo.id}`">
              <h2>{{list.name}}</h2>
            </router-link>
            <h3>主播：{{list.host}}</h3>
            <h3>人气：{{list.online}}</h3>
            <h3>频道：{{list.channel}}</h3>
          </div>
        </mu-list-item>
      </mu-col>
     </mu-row>
  </section>
</template>
<script>
import { AxiosXiongmaoLive,AxiosLive } from '../../api/index.js'

export default {
  name:"panda",
  data(){
    return {
      title:'panda',
      lists: [],
      logo: [],
      time: []
    }
  },
  created(){
    AxiosXiongmaoLive()
    .then(res =>{
      this.lists = res
    })
    AxiosLive()
    .then(res =>{
      this.logo = res[3]
    })
  },
}
</script>

<style lang="stylus" scoped>
   .logo
      margin 30px
      margin-bottom 30px
      .title
        display flex
        justify-content space-between
        align-items center
        span
          font-size 16px
          color #337ab7
   .row
      .col
        margin-top -5px
        transition .3s all ease
        text-align center
        img
          width 93%
        .info
          text-align left
          margin-left 10px
          h2
            padding-right 30px
            font-size 16px
            overflow  hidden;
            text-overflow ellipsis;
            display -webkit-box;
            -webkit-line-clamp 1;
            -webkit-box-orient vertical;
            margin-bottom 10px
            margin-top 5px
            color #337ab7
          h3
            margin-bottom 2px
</style>
