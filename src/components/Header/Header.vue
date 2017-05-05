<template lang="html">
  <section class="header">
    <header>
      <mu-appbar title="直播总汇 （平台Top20）">
        <mu-icon-button icon="menu" slot="left" label="undocked drawer" @click="toggle(true)"/>
        <!-- <mu-icon-menu slot="right" icon="more_vert" :open="opena" @opena="handleOpen" @close="handleClose" :value="theme" @change="changeTheme">
          <mu-menu-item value="light" title="LIGHT (DEFAULT)" />
          <mu-menu-item value="dark" title="DARK" />
          <mu-menu-item value="carbon" title="TEAL" />
          <mu-menu-item value="teal" title="CARBON" />
        </mu-icon-menu> -->
      </mu-appbar>
    </header>
    <div><mu-appbar></mu-appbar></div>
    <section>
      <mu-drawer
      :open="open"
      :docked="true"
      @close="toggle()"
      :width="300">
      <mu-list-item title="">
        <img src="http://www.muse-ui.org/images/uicon.jpg" alt="" />
      </mu-list-item>
      <mu-list-item title="">
        <span>登录</span>
      </mu-list-item>
        <mu-list @itemClick="docked ? '' : toggle()">
          <router-link to="/bilibili">
            <mu-list-item title="bilibili"/>
          </router-link>
          <router-link to="/douyu">
            <mu-list-item title="斗鱼"/>
          </router-link>
          <router-link to="/panda">
            <mu-list-item title="熊猫"/>
          </router-link>
          <router-link to="/zhanqi">
            <mu-list-item title="战旗"/>
          </router-link>
          <router-link to="/longzhu">
            <mu-list-item title="龙珠"/>
          </router-link>
          <router-link to="/huya">
            <mu-list-item title="虎牙"/>
          </router-link>
          <router-link to="/quanmin">
            <mu-list-item title="全民"/>
          </router-link>
        </mu-list>
      </mu-drawer>
    </section>
  </section>
</template>

<script>
import light from 'raw-loader!muse-ui/dist/theme-default.css'
import dark from 'raw-loader!muse-ui/dist/theme-dark.css'
import carbon from 'raw-loader!muse-ui/dist/theme-carbon.css'
import teal from 'raw-loader!muse-ui/dist/theme-teal.css'
export default {
  name:'header',
  data () {
    return {
      open: true,
      opena:false,
      docked: false,
      theme: 'dark',
       themes: {
         light,
         dark,
         carbon,
         teal
       }
    }
  },
  computed: {},
  mounted () {},
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
      this.$store.dispatch('closelist');
    },
    toggleClass () {
     this.opena = !this.opena
   },
    handleOpen () {
      this.open = true
    },
    handleClose () {
      this.open = false
    },
    changeTheme (theme) {
      this.theme = theme
      const styleEl = this.getThemeStyle()
      styleEl.innerHTML = this.themes[theme] || ''
    },
    getThemeStyle () {
       const themeId = 'muse-theme'
       let styleEl = document.getElementById(themeId)
       if (styleEl) return styleEl
       styleEl = document.createElement('style')
       styleEl.id = themeId
       document.body.appendChild(styleEl)
       return styleEl
     },
  },
  components: {}
}
</script>

<style lang="less" scoped>
.header{
  margin-left: 250px;
  position: relative;
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20141225;
  }
  .mu-paper{
    text-align: center;
    padding-top: 60px;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      vertical-align: top;
    }
    span{
      font-size: 20px;
    }
  }
}
</style>
