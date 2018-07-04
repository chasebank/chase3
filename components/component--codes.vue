<template>
  <div class="codes">
    <div class="grid">
      <div class="grid-col grid-col--1"></div>
      <div class="grid-col grid-col--2"></div>
      <div class="grid-col grid-col--3"></div>

      <div v-for="code in codes" :key="code.slug" class="grid-item">
        <code-post :code="code"/>
      </div>
    </div>
  </div>
</template>

<script>
import codePost from '@/components/component--code-post.vue'

const codes = {};
const req = require.context('@/pages/notes/codes/', false, /\.md$/);

req.keys().forEach((key) => {
  codes[key] = req(key);
});

export default {
  components: {
    codePost
  },

  computed: {
    codes() {
      const codeArray = [];
      
      Object.keys(codes).forEach((key) => {
        const code = codes[key],
              slug = key.replace('./', '').replace('.md', '');

        code.slug = slug
        // quote.authorSlug = quote.author.replace(/[.]/g,'').replace(/ /g, '-').toLowerCase()

        // if (quote.quoteImage) {
        //   quote.image = require('@/assets/quote-assets/' + quote.quoteImage)
        // } else {
        //   quote.image = require('@/assets/quote-assets/' + quote.authorSlug + '.png')
        // }

        codeArray.push(code);
      });
      
      return codeArray.sort( (firstCode, secondCode) => firstCode.created < secondCode.created ? 1 : -1 );
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
    this.setGrid()
  },
}
</script>

<style lang="scss" scoped>
.grid {
  // border: 1px solid yellow;
  display: flex;
}

.grid-col {
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
</style>

