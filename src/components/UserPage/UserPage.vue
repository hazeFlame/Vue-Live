<template lang="html">
  <div class="user">
    <mu-row gutter>
      <mu-col width="100" tablet="80" desktop="50">
        <div class="user_img" @mouseenter="over" @mouseleave="out">
          <img :src="lists.image" alt="">
          <a :href="lists.url" target="_blank">
            <transition name="slide-fade">
              <span v-if="show" class="fa fa-play-circle"></span>
            </transition>
            <transition name="fade">
              <div v-if="show" class="zhe"></div>
            </transition>
          </a>
        </div>
      </mu-col>
      <mu-col width="100" tablet="100" desktop="50" class="user_info">
        <h1>{{lists.name}}</h1>
        <router-link :to="`/website/?title=${title}&site=${lists.site_id}`">
          <h2>{{lists.site}}</h2>
        </router-link>
        <p><span v-if="lists.opened">正在直播</span><span v-else>未开播</span></p>
        <p><span class="fa fa-home"></span> {{lists.host}}</p>
        <p><span class="fa fa-user"></span> {{lists.online}}</p>
        <router-link :to="`/website/channel/${lists.channel_id}?title=${title}&site=${lists.site_id}`">
          <p class="site"><span class="fa fa-youtube-play"></span> {{lists.channel}}</p>
        </router-link>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
import { AxiosUserPage } from '../../api'
export default {
  name:'user',
  data(){
    return {
      lists:[],
      show:false,
      title:''
    }
  },
  created(){
    this.title = this.$route.params.name
    let id = this.$route.params.id
    AxiosUserPage(id)
    .then(res =>{
      this.lists = res
    })
  },
  methods:{
    over(){
      this.show = true
    },
    out(){
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
.user{
  .user_img{
    position: relative;
    a{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    img{
      vertical-align: top;
      width: 100%;
    }
    .zhe{
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,.5);
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }
    span{
      position: absolute;
      cursor: pointer;
      left: 50%;
      top:50%;
      margin-left: -40px;
      margin-top: -40px;
      font-size: 80px;
      color: #fff;
      z-index: 2;
    }
    margin: 20px;
    box-shadow: 0 0px 45px rgba(0,0,0,.3), 0 10px 18px rgba(0,0,0,.3)
  }
  .user_info{
    padding: 20px;
    h1{
      font-size: 22px;
      line-height: 44px;
      margin: 0;
    }
    h2{
      font-size: 20px;
      line-height: 50px;
      margin-top: -10px;
      color: #337ab7;
    }
    p{
      font-size: 15px;
      line-height: 25px;
    }
    .site{
      color: #337ab7;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateY(100px);
    opacity: 0;
  }
}
</style>
