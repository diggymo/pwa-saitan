<template>
  <div id="app">
    <nav class="navbar is-fixed-top is-primary">
      <div class="navbar-brand">
        <router-link class="navbar-item" active-class="" to="/home">
          <img src="/static/img/icons/brand.png" alt="Bulma: a modern CSS framework based on Flexbox" width="64" height="28">
        </router-link>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button is-info" data-social-network="Twitter" data-social-action="tweet" target="_blank" href="https://twitter.com/marooon88">
                <span class="icon">
                  <b-icon icon="twitter"></b-icon>
                </span>
              </a>
            </p>
            <p class="control">
              <a class="bd-tw-button button is-dark" data-social-network="Twitter" data-social-action="tweet" target="_blank" href="https://github.com/diggymo/pwa-saitan">
                <span class="icon">
                  <b-icon icon="github-circle"></b-icon>
                </span>
              </a>
            </p>
          </div>
        </div>
        <div class="navbar-burger burger" v-bind:class="{'is-active': isBurgerActive}" @click="isBurgerActive = !isBurgerActive">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active': isBurgerActive}">
        <transition name="fade">        
          <div class="navbar-start">
            <router-link @click.native="isBurgerActive = false" class="navbar-item" to="/home">Home</router-link>
            <router-link @click.native="isBurgerActive = false" class="navbar-item" to="/event">イベント</router-link>
            <router-link @click.native="isBurgerActive = false" class="navbar-item" to="/contacts">お問い合わせ</router-link>
            <router-link @click.native="isBurgerActive = false" class="navbar-item" to="/blog">ブログ</router-link>
            <router-link @click.native="isBurgerActive = false" class="navbar-item" to="/access">アクセス</router-link>
            <router-link @click.native="isBurgerActive = false" class="navbar-item" to="/search">教理横断検索</router-link>
          </div>
        </transition>                
      </div>
    </nav>
     <transition  name="slide-fade">
        <router-view 
        v-on:updateSubtitle="updateSubtitle"
        @sending="sending"
        ></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      subtitle: 'hogehoge',
      navigation: 'home',
      isBurgerActive: false
    }
  },
  methods: {
    updateSubtitle (subtitle) {
      this.subtitle = subtitle
    },
    sending () {
      this.$toast.open({
        duration: 3000,
        message: `送信中です`,
        position: 'is-bottom'
      })

      this.$toast.open({
        duration: 2000,
        message: `送信しました`,
        position: 'is-bottom',
        type: 'is-success'
      })
    },
    isActive (name) {
      return name === this.subtitle
    }
  }
}
</script>

<style>
@import url('//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

/* トランジション */
.slide-fade-enter-active {
  transition: all .4s ease;
  transition-delay: .4s
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
