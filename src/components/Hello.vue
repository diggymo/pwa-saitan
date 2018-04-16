<template>
  <div class="hello">
    <div class="columns">
      <div class="column"></div>
    </div>
    <div class="columns">
      <div class="column is-offset-1 is-10">
        <figure class="image is-5by3">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
