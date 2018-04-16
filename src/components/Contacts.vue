<template>
<div class="section">
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">お名前</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input" type="text" placeholder="お名前">
          <span class="icon is-small is-left">
            <b-icon
                icon="account">
            </b-icon>
          </span>
        </p>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">メールアドレス</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input" type="email" placeholder="メールアドレス">
          <span class="icon is-small is-left">
             <b-icon
                icon="email">
            </b-icon>
          </span>
        </p>
      </div>
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">内容</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea class="textarea" type="text" placeholder="お問い合わせ内容"></textarea>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-primary" @click="send">
            送信
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  mounted () {
    this.$emit('updateSubtitle', 'お問い合わせ')
  },
  methods: {
    send () {
      this.$emit('sending')
    }
  }
}
</script>