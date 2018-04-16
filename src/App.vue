<template>
  <div id="app">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            西丹分教会
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a href="/#/top">HOME</a></li>
              <li><a href="/#/event">行事</a></li>              
              <li><a href="/#/blog">ブログ</a></li>
              <li><a href="/#/access">アクセス</a></li>
              <li><a href="/#/contacts">お問い合わせ</a></li>
              <li><a href="/#/search">教理横断検索</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
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
      subtitle: 'hogehoge'
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
