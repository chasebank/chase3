<template>
  <div class="quotes">
    <div class="grid">
      <div class="grid-col grid-col--1"></div>
      <div class="grid-col grid-col--2"></div>
      <div class="grid-col grid-col--3"></div>

      <div v-for="quote in quotes" :key="quote.slug" class="grid-item">
        <quote-post :quote="quote"/>
        <!-- <div class="quote-post--wrap" :class="quote.authorSlug">
          <div class="quote-post">
            <img :src="quote.image" class="quote-post--image">
            <div v-if="quoteContent(quote.__content)" class="quote-post--text" v-html="quoteContent(quote.__content)"></div>
            <span v-if="quote.author" class="quote-post--author">{{ quote.author }}</span>
            <span v-if="quote.authorInfo" class="quote-post--author-info" v-html="quote.authorInfo"></span>
          </div>
            
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.8 103.8" class="quote-post--tail">
            <path d="M23.5 0v45.6c0 26.5 0 41.2-9.6 50.9-3.7 3.7-8.2 6-13.9 7.4 13.7-1.5 23.6-4.8 31.2-12.4 13.6-13.7 13.6-34.5 13.6-72V0H23.5z"/>
          </svg>
          
          <div class="quote-post--shadow"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Colcade from 'colcade'
import quotePost from '@/components/component--quote-post.vue'

// if (process.browser) {
//   window.onNuxtReady(() => {
//     const Colcade = require('colcade')
//   })
// }

const quotes = {};
const req = require.context('@/pages/notes/quotes/', false, /\.md$/);

req.keys().forEach((key) => {
  quotes[key] = req(key);
});

export default {
  components: {
    quotePost
  },

  computed: {
    quotes() {
      const quoteArray = [];
      
      Object.keys(quotes).forEach((key) => {
        const quote = quotes[key],
              slug = key.replace('./', '').replace('.md', '');

        quote.slug = slug
        quote.authorSlug = quote.author.replace(/[.]/g,'').replace(/ /g, '-').toLowerCase()

        if (quote.quoteImage) {
          quote.image = require('@/assets/quote-assets/' + quote.quoteImage)
        } else {
          quote.image = require('@/assets/quote-assets/' + quote.authorSlug + '.png')
        }

        quoteArray.push(quote);
      });
      
      return quoteArray.sort( (firstQuote, secondQuote) => firstQuote.created < secondQuote.created ? 1 : -1 );
    }
  },

  methods: {
    setGrid() {
      var grid = this.$el.querySelector('.grid');

      var colc = new Colcade( grid, {
        columns: '.grid-col',
        items: '.grid-item'
      })
    }
  },

  mounted() {
    // let checkColcade = setInterval(() => {
    //   this.setGrid()
    // }, 100)

    this.setGrid()

    //document.documentElement.style.setProperty('--scrollbarWidth', width + 'px');
  },

  beforeDestroy() {
    // this.colc.destroy()
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/bitsnpieces.scss';

.grid {
  // background-color: var(--testcolor);
  // width: $fullWidth;
  // border: 1px solid yellow;
  display: flex;
}

.grid-col {
  // flex-grow: 1;
  // border: 1px solid red;
  width: calc((100% - 12vh) / 3);
  // width: $fullWidth;
  margin-left: 3vh;

  @media (max-width: 1400px) {
    width: 100%;
    width: calc((100% - 9vh) / 2);
    margin-left: 3vh;

    &.grid-col--3 {
      display: none;
    }
  }

  @media (max-width: $mediumScreen) {
    width: calc((100% - 10vh));
    margin-left: 5vh;

    &.grid-col--2,
    &.grid-col--3 {
      display: none;
    }
  }

  // @media (min-width: $largeScreen) {
  //   width: calc((100% - 15vh) / 2);
  //   margin-left: 5vh;
  // }
}

.grid-item {
  // border: 2px solid red;
  // min-height: 25vh;
  margin-bottom: 4vh;

  @media (max-width: $mediumScreen) {
    margin-left: -2vh;
    margin-right: 2vh;

    &:nth-child(even) {
      margin-left: 2vh;
      margin-right: -2vh;
    }
  }
}

li {
  display: block;
}




</style>
