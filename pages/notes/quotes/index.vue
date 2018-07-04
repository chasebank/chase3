<template>
  <main class="container">
    <div class="content">
      <h1><span>Notes</span><span>& Quotes</span></h1>

      <quotes/>
    </div>
  </main>
</template>

<script>
import quotes from '@/components/component--quotes.vue'
import metaInfo from '@/mixins/meta-info.vue'

export default {
  components: {
    quotes
  },

  data() {
    return {
      title: 'Notes & Quotes',
    }
  },

  mixins: [metaInfo],

  meta: {
    depth: 2
  },
}
</script>
