<template>
<div>
  <div class="columns">
    <div class="column"></div>
  </div>
  <div class="columns">
    <div class="column is-offset-1-mobile is-10-mobile is-8 is-offset-2">
      <div class="is-hidden-mobile">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.45205764475!2d135.40202851528264!3d35.468357530244546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fff8837196b6f7b%3A0x34ffb5fb99610aab!2z44CSNjI1LTAwMzUg5Lqs6YO95bqc6Iie6ba05biC5rqd5bC777yR77yR77yX77yZ4oiS77yRIOWkqeeQhuaVmeilv-S4ueWIhuaVmeacgw!5e0!3m2!1sja!2sjp!4v1523711596072" 
          width="700" 
          height="500" 
          frameborder="0" 
          style="border:0" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="is-hidden-tablet">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.45205764475!2d135.40202851528264!3d35.468357530244546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fff8837196b6f7b%3A0x34ffb5fb99610aab!2z44CSNjI1LTAwMzUg5Lqs6YO95bqc6Iie6ba05biC5rqd5bC777yR77yR77yX77yZ4oiS77yRIOWkqeeQhuaVmeilv-S4ueWIhuaVmeacgw!5e0!3m2!1sja!2sjp!4v1523711596072" 
          width="240" 
          height="300" 
          frameborder="0" 
          style="border:0" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column is-offset-1-mobile is-10-mobile is-8 is-offset-2">
      <table class="table is-striped is-fullwidth">
        <tbody>
          <tr>
            <td>名称</td>
            <td>西丹分教会</td>
          </tr>
          <tr>
            <td>住所</td>
            <td>京都府舞鶴市字溝尻1179-1</td>
          </tr>
           <tr>
            <td>電車</td>
            <td>JR東舞鶴駅から徒歩20分</td>
          </tr>
          <tr>
            <td>車</td>
            <td>舞鶴若狭自動車道舞鶴東ICから5分</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'access',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  mounted () {
    this.$emit('updateSubtitle', 'アクセス')
  }
}
</script>