<template>
  <div>
    <div class="columns">
      <div class="column is-1">
      </div>   
    </div>
    <div class="columns">    
      <div class="column is-offset-1-mobile is-offset-1-tablet is-3-tablet is-10-mobile">
        <div class="card">
          <router-link :to="{name: 'BlogInfo', params: {blog_id: 'hogehoge'}}">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4 class="title is-4">最近思うところ</h4>
                新年度が始まりました。暖かな日差しの中で私は最近思うところがあります。
                <br>
                <b-tag rounded>ひのきしん</b-tag>
                <b-tag rounded>コラム</b-tag>
                <br>
                <small>2018/04/15 12:30</small>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="column is-offset-1-mobile is-3-tablet is-10-mobile">
        <div class="card">
          <router-link :to="{name: 'BlogInfo', params: {blog_id: 'otomarikai'}}">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4 class="title is-4">おめでたいお運び</h4>                
                いよいようちの教会からも10名別席のお運びをさせていただきました。
                <br>
                <b-tag rounded>お運び</b-tag>
                <br>
                <small>2018/04/01 06:30</small>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="column is-offset-1-mobile is-3-tablet is-10-mobile">
        <div class="card">
          <router-link :to="{name: 'BlogInfo', params: {blog_id: 'otomarikai'}}">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4 class="title is-4">おせち来場者数</h4>                                
                おせちの今年の来場結果は！なんと昨年の1.5倍にまで登りました。この影響は、近年の社会情勢の不安定さからきていると学者の....
                <br>
                <b-tag rounded>おせち</b-tag>
                <br>
                <small>2018/04/29 06:30</small>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  mounted () {
    this.$emit('updateSubtitle', 'ブログ')
  }
}
</script>