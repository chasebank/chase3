<template>
  <transition name="showHeader-">
    <header :class="{'content-scrolled' : contentScrolled, 'show-header' : contentScrolled || $route.name != 'home'}" v-if="contentScrolled || $route.name != 'home'">
      <a href="#" id="back" @click.prevent="goBack">
        <svg id="icon--back" xmlns="http://www.w3.org/2000/svg" width="19" height="24.665" viewBox="0 0 19 24.665"><path d="M18.779 22.529L5.205 15.003l13.574-8.225V0L-.114 12.467v1.885l18.893 10.313z"/></svg>
        
        <span>BACK to&nbsp;</span>

        <transition-group name="route-characters-">
          <span
            v-for="(item, index) in previousRoute"
            v-bind:key="item + index"
            class="route-character"
          >
            {{ item }}
          </span>
        </transition-group>
      </a>

      <h2 class="header--small-name"><span><nuxt-link :to="{ name: 'index'}" class="page-link">CHASE</nuxt-link></span><span><nuxt-link :to="{ name: 'index'}" class="page-link">WHITESIDE</nuxt-link></span></h2>
    </header>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      hideHeader: false
    }
  },

  computed: {
    navTransition() {
      if (this.$route.name == 'home') {
        return 'back-slide-down-'
      } else {
        return 'back-slide-right-'
      }
    },

    backToTopMsg() {
      let msg = "to top"
      return msg.split('')
    },

    previousRoute() {
      let msg = this.routeHistory[this.routeHistory.length - 1]

      if (this.contentScrolled) {
        msg = "top"
      }

      return msg.split('')
    },

    ...mapState([
      "contentScrolled",
      "routeHistory"
    ])
  },

  methods: {
    goBack() {
      if (!this.contentScrolled && this.$route.name != 'index') {

        if (this.routeHistory.length > 0) {
          this.$router.go(-1)
        } else {
          this.$router.push({ name: 'index'})
        }

      } else {

        console.log('back to top')

      }
    },

    beforeEnter(el) {
      el.style.transitionDelay = el.dataset.index * .05 + 's'
    },
    
    beforeLeave(el) {
      el.style.transitionDelay = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/bitsnpieces.scss';

header {
  background: linear-gradient(to top, #0b151d, rgba(black,.5) );
  background: linear-gradient(to top, rgba(#0b151d,0), rgba(black,1) );
  // background: red;
  position: fixed;
  top: 0;
  width: $fullWidth;
  height: $headerHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include responsive-property("padding-left", 2vw, 20vw);
  @include responsive-property("padding-right", 2vw, 20vw);
  z-index: 999;
  // transition: transform $transition;
  // transition-delay: $transition;
  // transform: translate3d(0,-100%,0);  
    
  @media (max-width: 400px) {
    display: block;
    padding-left: 1rem;
  }

  // &.show-header {
  //   transform: translate3d(0,0,0)
  // }
  
  &.content-scrolled {
    &:before {
      opacity: .8;
    }
    
    #icon--back {
      transform: rotateZ(90deg) rotateX(180deg);
    }
  }
  
  &:before {
    transition: opacity 1s;
    opacity: .4;
  }
}

.showHeader--enter-active,
.showHeader--leave-active {
  transition: transform $transition
}

.showHeader--enter,
.showHeader--leave-to {
  transform: translate3d(0,-100%,0)
}

#back {
  // background-color: yellow;
  font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 100%;
  color: #d2f8ff;
  text-decoration: none;
  position: absolute;
  position: relative!important;
}

.back-content--wrap {
  // background-color: green;
  padding-left: .275em;
  // height: $headerHeight;
}

.back-content {
  background-color: green;
  // position: absolute;
  // top: 0;
  // height: $headerHeight;
  // width: 100px;
  // line-height: $headerHeight;
  // display: flex;
  // align-items: center;
}

#icon--back {
  margin-right: .4rem;
  fill: #70bfce;
  transition: transform .8s cubic-bezier(0.72,-0.51, 0.25, 1)
}

.header--small-name {
  font-size: 1.5rem;
  margin-top: .2rem;
  margin-bottom: 0;
  padding-left: 0;

  span:nth-child(2) {
    &:after {
      display: none;
    }
  }
  
  @media (max-width: 400px) {
    // span:nth-child(2) {
      display: none;
    // }
  }
}


.transition--character-enter-active,
.transition--character-leave-active {
  transition: opacity 1s, color 1s, text-shadow 1s;
}

.transition--character-enter,
.transition--character-leave-to {
  opacity: 0;
}

.transition--character-enter {
  color: cyan;
  text-shadow: 0 0 1.5rem cyan;
}



#previous-route {
  background-color: magenta;
  position: relative;
  transition: all .5s;
}

.route-character {
  transition: opacity 1s, transform 1s, color 1s;
  display: inline-block;
  min-width: .3rem;
}

.route-characters--enter {
  opacity: 0;
  transform: translate3d(.5rem,0,0);
}

.route-characters--leave-to {
  opacity: 0;
  transform: translate3d(-.5rem,0,0);
}

.route-characters--leave-active {
  position: absolute;
  color: cyan;
}
</style>
