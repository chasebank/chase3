<template>
  <nuxt-link :to="{ name: 'notes-quotes-slug', params: { slug: quote.slug }}" tag="div" class="quote-post" >
    <div class="quote-post--content" :class="quoteStyling">
      <img :src="quote.image" class="quote-post--image">
      <nuxt-link :to="{ name: 'notes-quotes-slug', params: { slug: quote.slug }}">
        <div v-if="quote.__content" class="quote-post--text" v-html="quote.__content" ref="quoteContent"></div>
      </nuxt-link>
      <nuxt-link :to="{ name: 'notes-quotes-slug', params: { slug: quote.slug }}">
        <span v-if="quote.author" class="quote-post--author" v-html="quote.author"></span>
      </nuxt-link>
      <nuxt-link :to="{ name: 'notes-quotes-slug', params: { slug: quote.slug }}">
        <span v-if="quote.authorInfo" class="quote-post--author-info" v-html="quote.authorInfo"></span>
      </nuxt-link>
    </div>
      
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.8 103.8" class="quote-post--tail">
      <path d="M23.5 0v45.6c0 26.5 0 41.2-9.6 50.9-3.7 3.7-8.2 6-13.9 7.4 13.7-1.5 23.6-4.8 31.2-12.4 13.6-13.7 13.6-34.5 13.6-72V0H23.5z"/>
    </svg> -->

    <!-- <div class="quote-post--shadow"></div> -->
  </nuxt-link>
</template>

<script>
// const quotes = {};
// const req = require.context('./', false, /\.md$/);
// req.keys().forEach((key) => {
//   quotes[key] = req(key);
// });


export default {
  props: ['quote'],
  // computed: {
  //   quotes() {
  //     const quoteArray = [];
      
  //     Object.keys(quotes).forEach((key) => {
  //       const quotes = quotes[key];
  //       quotes.slug = key.replace('./', '').replace('.md', '');
  //       quoteArray.push(quotes);
  //     });
      
  //     return quoteArray;
  //   }
  // },
  // thisQuote
  computed: {
    quoteStyling() {
      let stylingClass = this.quote.hasOwnProperty('quoteImage') ? this.quote.quoteImage.replace(/\.[^/.]+$/, "") : this.quote.author.replace(/[.]/g,'').replace(/ /g, '-').toLowerCase()

      return stylingClass
    }
  },

  mounted() {
    let quoteContentStart = this.$refs.quoteContent.querySelector('p:first-of-type'),
        quoteContentEnd = this.$refs.quoteContent.querySelector('p:last-of-type')

    quoteContentStart.insertAdjacentHTML('afterbegin', "<span class='opening-double-quote'>“</span>&#xfeff;");
    quoteContentEnd.insertAdjacentHTML('beforeend', "&#xfeff;<span class='closing-double-quote'>”</span>");
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/bitsnpieces.scss';

.quote-post {
  position: relative;
  cursor: pointer;
  border-radius: 3rem;
  box-shadow:
    0 -.1rem .75rem rgba(#00434e,.25),
    0 0rem .25rem rgba(#00434e,.25),
    0 1.2rem 2.5rem -1rem #00434e;
}

.quote-post--content {
  @include squircle(60);
  
  background-color: #020e0e;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  text-align: center;
  padding: 2rem 2rem 2rem calc(4rem + 4vw);
  // background-repeat: no-repeat;
  // background-position: left;
  // background-size: auto 100%;
  text-shadow:
    0 .1rem .2rem black,
    0 .1rem .5rem black;
}

.quote-post--text {
  font-family: 'Amatic SC', 'Exo 2', sans-serif;
  font-size: 1.5rem;
  color: #d2f8ff;

  display: flex;
  flex-wrap: wrap
  // text-shadow: inherit;
}

/deep/ p {
  position: relative;
  display: inline-block;
  // background-color: red;
  color: inherit;
  margin-top: 0;
  margin-bottom: 0;
  text-shadow: inherit;

  // &:after {
  //   display: block;
  //   content: '';
  //   width: 1rem;
  //   height: 1rem;
  //   position: absolute;
  //   background-color: blue;
  // }
}

/deep/ .opening-double-quote {
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-size: 2.75rem;
  line-height: 1.75rem;
  display: inline-block;
  // background-color: purple;
  position: absolute;
  transform: translateX(-115%);
  color: #70bfce;
}

/deep/ .closing-double-quote {
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  
  display: inline-block;
  // background-color: purple;
  position: absolute;
  color: #70bfce;
  // transform: translateX(100%)
}


.quote-post--image {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  z-index: -1;
}

.quote-post--author {
  margin-top: 1rem;
  font-size: .75rem;
  font-weight: 500;
  color: #d2f8ff;
  margin-bottom: 0;
}

.quote-post--author-info {
  font-size: .6rem;
  color: #70bfce;
  display: block;
  // line-height: 1.2;
}

// .quote-post--tail {
//   display: block;
//   position: absolute;
//   bottom: 0;
//   right: .1px;
//   transform: translateY(10%);
//   width: calc(2rem + 5%);
//   max-width: 3rem;
//   z-index: -1;
// }

.quote-post--shadow {
  position: absolute;
  top: 25%;
  left: 8%;
  height: 65%;
  width: 86%;
  border-radius: 1.5rem;
  z-index: -2;
  filter: blur(1.5rem)
}

// .quote-post {
//   --textColor: white;
//   --backgroundColor: gray;
// }

// h3 {
//   color: var(--textColor)
// }

// .quote-post--content {
//   background-color: var(--backgroundColor);
//   color: var(--textColor);
  // text-shadow:
    // 0 .2rem .4rem rgba($textShadow,.5),
    // 0 0rem 2rem $textShadow;
// }

// @function swatch($swatch-color, $swatch-alpha:1) {
//   @return unquote("rgba(var(--#{$swatch-color}), #{$swatch-alpha})");
// }
// .green { color: swatch(green, .1); }


@function shadowColor($swatch-color) {
  @return unquote("adjust_hue(saturate(lighten(var(--#{$swatch-color}), 25), 40), 5)")
}

// .quote-post--shadow {
//   background-color: var(--backgroundColor);
// }

@mixin quotePostStyles($color: red,$textShadow: adjust_hue(saturate(darken($color, 40), 100), -30),$leftPad: calc(8rem + 5vw)) {
  .quote-post--content {
    // background-color: $base;
    // background-image: url('../assets/quote-assets/' + $author + '.png');
    // color: $accent;
    padding-left: $leftPad;
    // text-shadow:
      // 0 .2rem .4rem rgba($textShadow,.5),
      // 0 0rem 2rem $textShadow;
  }
  
  // $shadowColor: adjust_hue(saturate(lighten($base, 25), 40), 5);
  
  .quote-post--shadow {
    // background-color: $shadowColor;
  }
  
  .quote-post--tail {
    // fill: $base;
    // filter: drop-shadow(-.4rem 0rem .4rem rgba($shadowColor,.4))
  }
}

// @include quotePostStyles(
  //   $author: '',
  //   $base: rgb(),
  //   $accent: ,
  //   $textShadow: ,
  //   $leftPad: calc(8rem + 5vw)
  // )

.stephen-colbert {
  // @include quotePostStyles(
  //   $author: 'stephen-colbert',
  //   $base: rgb(9,47,241),
  //   $accent: white
  // );
    
  @media (max-width: $smallScreen) {
    // .quote-post { padding-left: 25% }
    // .quote-post { background-position: 20% }
  }
}

.alan-cooper {
  // @include quotePostStyles(
  //   $author: 'alan-cooper',
  //   $base: rgb(98,99,103),
  //   $accent: #d9e3f2
  // )
}

.casey-neistat {
  @include quotePostStyles(
    // $author: 'casey-neistat',
    // $base: rgb(0,254,84),
    // $accent: #010201,
    // $textShadow: rgb(0,254,84),
    // $leftPad: calc(5rem + 5vw)
  )
}

.narnia {
  padding-left: calc(5rem + 4vw);

  img {
    height: 160%;
    // left: -5%;
    @include responsive-property("left", -16%, -10%);
  }
}

.neil-degrasse-tyson {
  padding-left: calc(5rem + 4vw);

  img {
    // height: 160%;
    // left: -5%;
    @include responsive-property("left", -16%, -10%);
  }
}

.cs-lewis {
  // @include quotePostStyles(
    // $author: 'casey-neistat',
    // $base: #180a11,
    // $accent: #f1f6e8,
  // );

  // .quote-post--image {
  //   height: 150%;
  //   left: 0%;
  // }

  // @media (max-width: 1000px) {
  //   .quote-post--image {
  //     height: 150%;
  //     left: -20%;
  //   }
  // }

  // @media (max-width: $mediumScreen) {
  //   .quote-post--image {
  //     height: 200%;
  //     left: -5%;
  //   }
  // }
}

.franklin-d-roosevelt {
  // @include quotePostStyles(
  //   // $author: 'franklin-d-roosevelt',
  //   // $base: rgb(45,50,43),
  //   // $accent: #f8ffe1,
  //   $leftPad: calc(9rem + 5vw)
  // );

  // @media (max-width: 1100px) {
  //   // .quote-post { padding-left: 25% }
  //   .quote-post { background-position: -50% 100% }
  // }

  // @media (max-width: $smallScreen) {
  //   // .quote-post { padding-left: 25% }
  //   .quote-post { background-position: 0% 100% }
  // }
}

.niels-bohr {
  // @include quotePostStyles(
  //   // $author: 'franklin-d-roosevelt',
  //   // $base: rgb(45,50,43),
  //   // $accent: #f8ffe1,
  //   $leftPad: calc(9rem + 5vw)
  // );
}

.seneca {
  padding-left: calc(8rem + 4vw)

  // @include quotePostStyles(
  //   // $author: 'seneca',
  //   // $base: #333543,
  //   // $accent: white,
    
  // )
}

// .quote-post--tail {
//   fill: $base;
//   filter: drop-shadow(-.4rem 0rem .4rem rgba($shadowColor,.4))
// }
</style>
