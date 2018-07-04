<template>
  <main class="container">
    <div class="content">
      <h1>This is the contact page</h1>
      <p><nuxt-link to="/">Home page</nuxt-link></p>
    </div>
  </main>
</template>

<script>
import metaInfo from '@/mixins/meta-info.vue'

export default {
  data() {
    return {
      title: 'Contact',
    }
  },

  mixins: [metaInfo],

  meta: {
    depth: 4
  }
}
</script>

<style lang="scss">
// .fadeOpacity-enter-active, .fadeOpacity-leave-active {
//   transition: opacity .35s ease-out;
// }

// .fadeOpacity-enter, .fadeOpacity-leave-active {
//   opacity: 0;
// }
</style>