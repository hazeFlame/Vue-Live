<template lang="html">
  <section class="channel">
    <header>
      <mu-list-item title="">
        <h1>{{livesinfo.name}}</h1>
      </mu-list-item>
      <div class="chatotal">
        <h2>{{livesinfo.site}}</h2>
        <p>当前频道共{{livesinfo.total}}个直播</p>
      </div>
    </header>
    <section>
      <mu-list-item title="">
        <h1>房间列表</h1>
      </mu-list-item>
      <mu-row gutter>
        <mu-col width="50" tablet="25" desktop="20" v-for="live in lives.data" :key="live.id">
          <mu-list-item>
            <router-link :to="`/${title}/${live.id}`">
              <img :src="live.image" alt="">
            </router-link>
            <div class="">
              <router-link :to="`/${title}/${live.id}`">
                <h6>{{live.name}}</h6>
              </router-link>
              <p>{{live.host}}</p>
              <p><span class="fa fa-user"></span> {{live.online}}</p>
            </div>
          </mu-list-item>
        </mu-col>
      </mu-row>
    </section>
    <section class="flexend">
      <mu-pagination :pageSize="40" :total="livesinfo.total" :current="current" @pageChange="handleClick"></mu-pagination>
    </section>
  </section>
</template>

<script>
import { AxiosChannelLive,AxiosChannel } from '../../api'
export default {
  name:'channel',
  data(){
    return {
      current: 1,
      lives:[],
      livesinfo:[],
      title:''
    }
  },
  created(){
    this.title = this.$route.query.title
    let id = this.$route.params.id;
    let page = this.current;
    AxiosChannelLive(id,page)
    .then(res =>{
      this.lives = res
    }),
    AxiosChannel(id)
    .then(res =>{
      this.livesinfo = res
    })
  },
  methods: {
    handleClick (newIndex) {
      let page = newIndex;
      let id = this.$route.params.id;
      AxiosChannelLive(id,page)
      .then(res =>{
        this.lives = res

      })
    }
  }
}
</script>

<style lang="less" scoped>
.channel{
  h1{
    margin: 0;
  }
  header{
    .chatotal{
      padding-left:15px;
      h2{
        font-size:20px;
      }
      p{

      }
    }
  }
  section{
    img{
      width: 100%;
      border-radius: 5px;
    }
    h6{
      font-size: 16px;
      color: #337ab7;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      color: #337ab7;
    }
  }
  .flexend{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 80px;
    margin-top: 50px;
  }
}

</style>
