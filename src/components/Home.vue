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
  }
}
</script>

<style>
</style>