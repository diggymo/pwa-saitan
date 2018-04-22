<template>
<div>
  <!-- <div class="columns">
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/256x256.png">
    </figure>
  </div>
  <div class="columns">
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/256x256.png">
    </figure>
  </div> -->
</div>  
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  created () {
    this.$emit('updateSubtitle', 'HOME')
  },
  components: {
  }
}
</script>