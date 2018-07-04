<template>
  <main class="container">
    <div class="content">
      <h1 class="header--home"><span>CHASE</span><span>WHITESIDE</span><span>Designer</span><span>Developer</span></h1>
      
      <h2 class="header--portfolio"><span><nuxt-link to="/portfolio" class="page-link">Portfolio</nuxt-link></span><span><nuxt-link to="/portfolio" class="page-link">Projects</nuxt-link></span></h2>

      <portfolio/>

      <h2><span><nuxt-link :to="{ name: 'notes-codes'}" class="page-link">Code</nuxt-link></span><span><nuxt-link :to="{ name: 'notes-codes'}" class="page-link">Snippets</nuxt-link></span></h2>
      <codes/>

      <h2><span><nuxt-link :to="{ name: 'notes-quotes'}" class="page-link">Notes</nuxt-link></span><span><nuxt-link :to="{ name: 'notes-quotes'}" class="page-link">& Quotes</nuxt-link></span></h2>

      <quotes/>
    </div>
  </main>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import metaInfo from '@/mixins/meta-info.vue'

import portfolio from '@/components/component--portfolio.vue'
import codes from '@/components/component--codes.vue'
import quotes from '@/components/component--quotes.vue'

export default {
  components: {
    portfolio,
    codes,
    quotes
  },

  mixins: [metaInfo],

  data() {
    return {
    }
  },

  meta: {
    depth: 1
  }
}
</script>

<style lang="scss">
// .container {
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// }

// .title {
//   font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }

// .subtitle {
//   font-weight: 300;
//   font-size: 42px;
//   color: #526488;
//   word-spacing: 5px;
//   padding-bottom: 15px;
// }

// .links {
//   padding-top: 15px;
// }
</style>
