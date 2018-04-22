<template>
  <div id="app">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            西丹分教会のHP
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">  
          <div class="container">
            <ul>
              <router-link tag="li" active-class="is-active" to="/home"><a>HOME</a></router-link>
              <router-link tag="li" active-class="is-active" to="/event"><a>イベント</a></router-link>
              <router-link tag="li" active-class="is-active" to="/contacts"><a>お問い合わせ</a></router-link>
              <router-link tag="li" active-class="is-active" to="/blog"><a>ブログ</a></router-link>
              <router-link tag="li" active-class="is-active" to="/access"><a>アクセス</a></router-link>
              <router-link tag="li" active-class="is-active" to="/search"><a>教理横断検索</a></router-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="section is-paddingless">
      <transition  name="slide-fade">
        <router-view 
        v-on:updateSubtitle="updateSubtitle"
        @sending="sending"
        ></router-view>
      </transition>
    </section>
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
