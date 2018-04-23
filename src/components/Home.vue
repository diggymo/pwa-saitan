<template>
  <div>
    <figure class="image is-3by1">
      <img src="/static/img/home/IMG_1411.JPG"/>
    </figure>
    <figure class="image is-3by1">
      <img src="/static/img/home/IMG_1407.JPG"/>
    </figure>
    <figure class="image is-3by1">
      <img src="/static/img/home/IMG_1410.JPG"/>
    </figure>
  </div>
</template>

<script>

export default {
  name: 'HOME',
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('updateSubtitle', 'HOME')
  },
  created () {
    this.recommend()
  },
  methods: {
    recommend () {
      this.$snackbar.open({
        duration: 6000,
        message: 'ご意見等はTwitterまでドウゾ👉',
        type: 'is-warning',
        position: 'is-bottom-right',
        actionText: 'MyTwitter',
        queue: false,
        onAction: () => {
          window.open('https://twitter.com/marooon88', '_blank')
        }
      })
    }
  }
}
</script>

<style>
</style>