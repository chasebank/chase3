<template>
  <div class="code-post">
    <div class="code-post--content">
      <h3 v-html="code.title" class="code-post--title"></h3>

      <p v-html="code.description" class="code-post--description"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['code']
}
</script>

<style lang="scss" scoped>
.code-post--content {
  position: relative;
  background-image: url(~/assets/personal-site--bg.jpg);
  position: relative;
  padding: 1.5rem 2rem 1.2rem ;
  text-shadow:
    0 .1rem .2rem black,
    0 .1rem .5rem black;

  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    background-image:
      url(~/assets/code-assets/codes-bg.gif),
      url(~/assets/code-assets/code-bg-color.gif);
  background-position: top right;
  background-repeat: no-repeat, repeat, repeat;
  mix-blend-mode: screen;
  }

  &:after {
    background-color: #00ccff;
    mix-blend-mode: darken;
  }
}

.code-post--title {
  position: relative;
  margin-top: -2.2rem;
  margin-bottom: 0;
  text-shadow: inherit;
  z-index: 1;
}

.code-post--description {
  position: relative;
  font-family: 'Source Code Pro', monospace;
  margin-top: .5rem;
  font-size: .9rem;
  font-weight: 400;
  text-shadow: inherit;
  z-index: 1;
}


// .code-post {
//   border-radius: 3rem;
//   box-shadow:
//     0 -.1rem .75rem rgba(#00434e,.25),
//     0 0rem .25rem rgba(#00434e,.25),
//     0 1.2rem 2.5rem -1rem #00434e;
// }

// .code-post--content {
//   @include squircle(60);
//   position: relative;
  
//   background: #121c1f url(~/assets/code-assets/codes-bg.gif) top right no-repeat;
//   padding: .5rem 2rem 1rem 2rem;
//   text-shadow:
//     0 .1rem .2rem black,
//     0 .1rem .5rem black;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   // align-items: center;

//   &:before,
//   &:after {
//     display: block;
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//   }

//   &:before {
//     background-color: #00c1ff;
//     mix-blend-mode: overlay;
//   }

//   &:after {
//     background: linear-gradient(5deg, #020e0e 75px, rgba(#020e0e,0))
//   }
// }

// .code-post--title {
//   font-size: 1.8rem;
//   margin-top: 0;
//   margin-bottom: 0rem;
//   text-shadow: inherit;
//   line-height: 1;
// }

// .code-post--description {
//   text-shadow: inherit;
//   font-size: .9rem;
//   margin-bottom: 0;
//   font-family: 'Source Code Pro', monospace;
// }
</style>

