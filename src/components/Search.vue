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
          
          <div class="columns">
            <div class="column is-12">
              <b-field>
                <ais-input placeholder="おさしづ/教祖伝逸話篇/おふでさきから検索" :class-names="{'ais-input': 'input is-rounded'}"></ais-input>
                <!-- <ais-search-box> -->
                  <!-- <form role="search" action="">
                    <div class="field has-addons">
                      <div class="control">
                        <input autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" class="ais-input input" placeholder="" type="search">
                      </div>
                      <div class="control">
                        <button type="submit" class="button is-success ais-search-box__submit">
                          検索ぅ
                        </button>
                      </div>
                    </div>
                  </form> -->
                <!-- </ais-search-box> -->
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
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
          <div class="column is-4 is-centered">
            <ais-powered-by></ais-powered-by>              
          </div>
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