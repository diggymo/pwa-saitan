<template>
  <div>
    <div class="columns">
      <div class="column">
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-1 is-10">
        <ais-index
          app-id="AYYO2YO3GP"
          api-key="c263b3c017c9a1de029578a9c3093325"
          index-name="kyoten"
        >
          
          <div class="columns is-centered">
            <div class="column is-4">
              <b-field>
                <ais-search-box></ais-search-box>
                <ais-powered-by></ais-powered-by>
              </b-field>
            </div>
            <div class="column is-8">
               <section>
                  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                    <ais-pagination :class-names="{
                      'ais-pagination': 'pagination-list',
                      'ais-pagination__link': 'pagination-link',
                      'ais-pagination__item--active': 'is-current',}">
                    </ais-pagination>
                  </nav>
                </section>
            </div>
          </div>
          
          <ais-results>
            <template slot-scope="{ result }">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <h2 class="title is-2">{{ result.書名 }}：{{ result.大カテゴリ }}</h2>
                      <h4 class="title is-4">{{ result.中カテゴリ }}</h4>
                    </div>
                  </div>
                  <div class="content">
                    <ais-highlight :result="result" attribute-name="コンテンツ"></ais-highlight>
                  </div>
                </div>
              </div>
            </template>
          </ais-results>
          <div class="columns">
            <div class="column">
            </div>
          </div>
          <section>
            <nav class="pagination is-centered is-medium" role="navigation" aria-label="pagination">
              <ais-pagination :class-names="{
                'ais-pagination': 'pagination-list',
                'ais-pagination__link': 'pagination-link',
                'ais-pagination__item--active': 'is-current'}">
              </ais-pagination>
            </nav>
          </section>
        </ais-index>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'access',
  data () {
    return {
    }
  },
  mounted () {
    this.$emit('updateSubtitle', '教理横断検索')
  }
}
</script>

<style type="css">
  em {
    background-color: coral !important;
  }
</style>