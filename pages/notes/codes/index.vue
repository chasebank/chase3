<template>
  <main class="container">
    <div class="content">
      <h1><span>Code</span><span>Snippets</span></h1>

      <codes/>
    </div>
  </main>
</template>

<script>
import codes from '@/components/component--codes.vue'
import metaInfo from '@/mixins/meta-info.vue'

export default {
  components: {
    codes
  },

  data() {
    return {
      title: 'Code Snippets',
    }
  },

  mixins: [metaInfo],

  meta: {
    depth: 2
  },
}
</script>
