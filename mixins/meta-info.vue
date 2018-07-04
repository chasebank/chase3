<script>
// import { store } from '../store';

export default {
  name: 'metaInfo',
  // metaInfo() {
  //   return {
  //     title: this.title
  //   }
  // },
  
  // head: {
  //   title: this.title
  // },

  head() {
    return {
      title: this.title,
    }
  },

  beforeDestroy() {
    // console.log('destroying ' + this.title)

    // store.commit('handleHistory', this.title)
  },
  mounted() {
    this.$store.commit('handleHistory', this.title)
  }
  // methods: {
  //   setScrollState() {
  //     if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
  //       store.commit('contentScrolled')
  //       console.log('scrolling')
  //     } else {
  //       store.commit('contentNotScrolled')
  //       console.log('not scrolling')

  //     }
  //   }
  // },
  // beforeMount() {
  //   store.commit('contentScrolled')

  //   console.log('before mount')
  // },
  // mounted() {
  //   setTimeout(store.commit('contentNotScrolled'),2000)
  // }
};
</script>