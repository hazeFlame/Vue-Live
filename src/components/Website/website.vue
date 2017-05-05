<template lang="html">
  <section class="website">
    <header>
      <mu-row gutter>
         <mu-col width="101" tablet="13" desktop="13"><img :src="info.image" alt=""></mu-col>
         <mu-col width="100" tablet="100" desktop="100">
           <div class="channeinfo">
             <h1>{{info.name}}</h1>
             <p>{{info.description}}</p>
             <p>频道数：{{info.channel_total}}</p>
             <p>正在直播房间数：{{info.room_total}}</p>
           </div>
         </mu-col>
       </mu-row>
    </header>
    <section class="lists">
      <div>
        <mu-list-item title="">
          <div class="title">
            <h2>频道列表</h2>
          </div>
        </mu-list-item>
        <mu-row gutter>
          <mu-col width="50" tablet="25" desktop="15" v-for="list in Channels" :key="list.id">
            <mu-list-item>
              <div v-if="list.image" class="">
                <router-link :to="`/website/channel/${list.id}?title=${info.code}&site=${info.id}`">
                  <img :src="list.image" alt="">
                </router-link>
              </div>
              <div class="" v-else>
                <router-link :to="`/website/channel/${list.id}?title=${info.code}&site=${info.id}`">
                  <img src="http://bj.bcebos.com/mas-service/1489563366591a677e96b4f8f255d8f81ceda55ac58a2" alt="">
                </router-link>
              </div>
              <div class="info">
                <router-link :to="`/website/channel/${list.id}?title=${info.code}&site=${info.id}`">
                  <h3>{{list.name}}</h3>
                </router-link>
                <h4>主播：{{list.total}}</h4>
              </div>
            </mu-list-item>
          </mu-col>
        </mu-row>
      </div>
    </section>
  </section>
</template>
<script>

import { AxiosAllChannel ,AxiosChannelInfo } from '../../api'
export default {
  name:'website',
  data(){
    return {
      Channels:[],
      info:[]
    }
  },
  created(){
    let id = this.$route.query.site
    AxiosAllChannel(id)
    .then(res =>{
      this.Channels = res
    })
    AxiosChannelInfo(id)
    .then(res =>{
      this.info = res
    })
  }
}
</script>

<style lang="less" scoped>
.website{
  header{
    padding: 15px;
    .row{
      justify-content: flex-start;
      img{
        width: 100%;
      }
      .channeinfo{
        margin-left: 5px;
        h1{
          font-size:20px;
          margin: 0;
          margin-bottom: 10px;
        }
        p{
          line-height: 24px;
        }
      }
    }
  }
  .lists{
    .row{
      justify-content: flex-start;
      text-align: center;
      img{
        width: 80%;
      }
    }
    h2{
      font-size: 20px;
      margin: 0;
    }
    h3{
      font-size: 16px;
      color: #337ab7;
    }
  }
}
</style>
