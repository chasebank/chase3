<template>
  <div id="layout" ref="layout">
    <transition name="showHeader-">
      <navigation v-if="contentScrolled || $route.name != 'index'"></navigation>
    </transition>

    <div class="test-width"></div>

    <!-- <nuxt/> -->

    <transition :name="$store.state.routeTransitionDirection" @before-leave="beforeRouteLeave" @enter="routeEnter">
      <nuxt :key="$route.fullPath" />
    </transition>

    <myfooter ref="myFooter" />

    <!-- <transition :name="routeTransitionDirection" @before-leave="fakeScrollPosition">
      <router-view :key="$route.fullPath"></router-view>
    </transition> -->
  </div>
</template>

<script>
import navigation from '@/components/component--navigation.vue'
import myfooter from '@/components/component--footer.vue'

import { mapState } from 'vuex'

export default {
  components: {
    navigation,
    myfooter
  },

  data() {
    return {
      // routeTransitionDirection: "route-transition--slide-left-"
      // lastFooterPosition: null,
      // firstPageHeight: null
    }
  },

  computed: {
    ...mapState([
      // "routeTransitionDirection"
    ])
  },

  watch: {
    $route(to, from) {
      // const toDepth = to.meta.depth
      // const fromDepth = from.meta.depth

      // this.routeTransitionDirection = toDepth < fromDepth ? "route-transition--slide-right-" : "route-transition--slide-left-"

      // console.clear()
      // console.log(to.meta)

      // console.log(this.$refs.layout)
      
    }
  },

  computed: {
    ...mapState(['contentScrolled']),
    
    pageStyling() {
      return this.$route.fullPath.match(/[^/]*(?=(\/)?$)/)[0]
    }
  },

  methods: {
    fakeScrollPosition(el) {
      let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop

      el.style.top = (scrollPosition * -1) + 'px'

      console.log('ran fakeScrollPos', scrollPosition)
    },

    setScrollState() {
      let checkState = () => {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          this.$store.commit('contentScrolled')
        } else {
          this.$store.commit('contentNotScrolled')
        }
      }

      checkState()
      
      window.addEventListener("scroll", function(){
        checkState()
      })
    },

    measureFooterPosition() {
      // let windowHeight = document.body.innerHeight || document.documentElement.clientHeight,
      //     elInfo = this.$refs.myFooter.$el.getBoundingClientRect(),
      //     elTopPos = parseInt(elInfo.top),
      //     elVisible = windowHeight - elTopPos,
      //     elHidden = elInfo.height - elVisible
      
      // return elHidden
    },

    saveLastFooterPos(el) {
      // this.lastFooterPosition = this.measureFooterPosition()
      // this.firstPageHeight = getComputedStyle(el.parentNode).height

      // let layoutEl = this.$refs.layout
      // // this.firstPageHeight = getComputedStyle(layoutEl).height
      // this.firstPageHeight = layoutEl.offsetHeight

      // console.log('first post ' + this.firstPageHeight)
      // console.log(el)
    },

    handleNewFooterPos(el) {
      // let footerEl = this.$refs.myFooter.$el

      // let newFooterPosition = this.measureFooterPosition(),
      //     footerHeight = footerEl.getBoundingClientRect().height

      // let newFooterFullyHidden = newFooterPosition > footerHeight,
      //     oldFooterFullyHidden = this.lastFooterPosition > footerHeight

      // let checkFooterPositionChange = newFooterPosition == this.lastFooterPosition

      
      // if (!checkFooterPositionChange && newFooterFullyHidden || !checkFooterPositionChange && oldFooterFullyHidden) {
      //   footerEl.style.opacity = 0
      //   footerEl.style.transition = "opacity .6"
      //   footerEl.style.opacity = 1

      //   setTimeout(() => {
      //     footerEl.style.transition = "none"
      //   }, 600);
      // }
      
      // let newFooterHidden = newFooterPosition > 0,
      //     newFooterPartiallyHidden = newFooterHidden && newFooterPosition < footerHeight,
          
      //     oldFooterHidden = this.lastFooterPosition > 0,
      //     oldFooterPartiallyHidden = oldFooterHidden && this.lastFooterPosition < footerHeight
      
      // if (newFooterHidden != oldFooterHidden || newFooterPartiallyHidden || oldFooterPartiallyHidden) {
      //   // if new or old hidden differ
      //   // or if either were partially hidden
      //   footerEl.style.backgroundColor = 'green'


      //   // transition between the difference
      // }
      
      // console.log(newFooterHidden != oldFooterHidden)
      
      
      // if (newFooterHidden && !oldFooterHidden) {
      //   // set position top to old
      //   // transform(0,difference,0)
      // }
      
      // if (oldFooterHidden && !newFooterHidden) {
      //   // set position to 100%
      //   // transform(0,-difference,0)
      //   footerEl.style.position = 'fixed'
      //   footerEl.style.top = '100%'
      //   footerEl.style.transform = 'translate3d(0,100%,0)'

      //   setTimeout(() => {
      //     footerEl.style.position = 'initial'
      //     footerEl.style.transform = 'translate3d(0,0,0)'
      //   }, 600);
      // }
      
      // if (newFooterPartiallyHidden || oldFooterPartiallyHidden) {
      //   // not sure
      // }
      
      // else both were fully visible or fully hidden and no transition is needed
      // let firstHeight = getComputedStyle(loginEl).height
      // el.style.height = 'auto'
      // let secondPageHeight = getComputedStyle(el.parentNode).height
      // el.style.height = this.firstPageHeight
      // el.offsetHeight // force repaint
      // el.style.height = secondPageHeight

      // console.log(this.firstPageHeight)
      // console.log(secondPageHeight)
    },

    beforeRouteLeave(el) {
      this.fakeScrollPosition(el)
      // this.saveLastFooterPos(el)
    },

    routeEnter(el) {
      // this.handleNewFooterPos(el)

      // let layoutEl = this.$refs.layout
      // layoutEl.style.height = 'auto'
      // let secondPageHeight = layoutEl.offsetHeight
      // layoutEl.style.height = this.firstPageHeight + 'px'
      // layoutEl.offsetHeight // force repaint
      // layoutEl.style.height = secondPageHeight + 'px'

      // let difference = (this.firstPageHeight - secondPageHeight) / 10000,
      //     duration = .6 + (-difference > 0 ? -difference : difference) + 's'

      // console.log('difference' + difference)
      
      // layoutEl.style.transitionDuration = duration

      // console.log('second pos ' + secondPageHeight)

      // setTimeout(() => {
      //   layoutEl.style.height = 'auto'
      // }, duration);

      // this.$refs.myFooter.$el
    },

    getScrollbarWidth() {
      // Create a temporary div container and append it into the body
      const container = document.createElement('div');
      // Append the container in the body
      document.body.appendChild(container);
      // Force scrollbar on the container
      container.style.overflow = 'scroll';
      container.style.position = 'fixed';

      // Add a fake div inside the container
      const inner = document.createElement('div');
      container.appendChild(inner);

      // Calculate the width based on the container width minus its child width
      const width = container.offsetWidth - inner.offsetWidth;
            
      // Remove the container from the body
      document.body.removeChild(container);
      
      // Check if scrollbar exists on body https://stackoverflow.com/a/681729/3606700
      // const root = document.compatMode == 'BackCompat' ? document.body : document.documentElement;
      // const hasVerticalScrollbar = root.scrollHeight > root.clientHeight;
      
      // set scrollbar width if it exists
      // if (hasVerticalScrollbar) {
      //   document.documentElement.style.setProperty('--scrollbarWidth', width + 'px');
      // } else {
      //   document.documentElement.style.setProperty('--scrollbarWidth', '0px');
      // }
      // above part isn't necessary in this case with this design because there is always a scroll element, if not an actual bar.

      document.documentElement.style.setProperty('--scrollbarWidth', width + 'px');

      // console.log(document.documentElement.style)
    },

    getFooterHeight() {
      const height = this.$refs.myFooter.$el.offsetHeight

      this.$el.style.setProperty('--footerHeight', height + 'px');
    }
  },

  mounted() {
    // console.clear();


    this.setScrollState()

    // window.addEventListener('scroll', this.setScrollState())

    this.getScrollbarWidth()
    window.onresize = () => { this.getScrollbarWidth() }

    this.getFooterHeight()
    window.onresize = () => { this.getFooterHeight() }

    // let cosmos = document.getElementById("cosmos"),
    //     mask = document.getElementById("cosmos-mask"),
    //     x = parseInt(window.innerWidth),
    //     y;

    // if (matchMedia) {
    //   const mq = window.matchMedia("(min-width: 550px)");
    //   mq.addListener(WidthChange);
    //   WidthChange(mq);
    // }

    // function WidthChange(mq) {
    //   if (mq.matches) {
    //     y = parseInt(window.innerWidth * 0.22);
    //   } else {
    //     y = parseInt(window.innerWidth * 0.6);
    //   }
    // }

    // cosmos.setAttribute("viewBox", `0 0 ${x} ${y}`);
    // mask.querySelector("image").setAttribute("height", y);
    // mask.querySelector("image").setAttribute("width", x);

    // function getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1) + min);
    // }

    // let makeItem = (yMax) => {
    //   let item = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
    //       size = Math.random() * 1.5,
    //       yCoord = Math.floor(Math.random() * yMax)
      
    //   item.setAttribute("width", size);
    //   item.setAttribute("height", size);
    //   item.setAttribute("y", yCoord);
    //   // item.setAttribute("fill", "red");

    //   let color = '0,198,214'

    //   if (Math.random() < .1) {
    //     color = '210,248,255'
    //   } else if (Math.random() > .1 && Math.random() < .3) {
    //     // color = '112,191,206'
    //   }

    //   item.setAttribute("fill", 'rgba(' + color + ',1)');

    //   cosmos.appendChild(item);

    //   let time = new TimelineMax({repeat: -1})
      
    //   let speed = getRandomInt(200, 400)
      
    //   time.to(item, speed, {
    //     x: x,
    //     y: y + yCoord,
    //     ease: Linear.easeNone,
    //   }).progress( Math.random() )
    // }

    // for (let i = 0; i < 2000; i++) {
    //   makeItem(-500)
    //   makeItem(500)
    // }

    
  },

  metaInfo: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Chase Whiteside` : 'Chase Whiteside';
    }
  }
}
</script>


<style lang="scss">
@import '~/styles/global.scss';

*,*:before,*:after { box-sizing: inherit; max-height: 999999px; }

:root {
  --scrollbarWidth: 0px;
}

html  {
  box-sizing: border-box;
  height: 100%;
  // background: white;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #0b151d;
  
      
  
  // background-attachment: fixed, fixed, local;
  // &:before {
  //   display: block;
  //   content: '';
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: $fullWidth;
  //   height: 100%;
  //   background: #0b151d url(~/assets/personal-site--footer.png) top center no-repeat;
  //   z-index: -1;
  // }

  // &:after {
  //   display: block;
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   padding-top: 21.5%;
  //   background: url(~/assets/personal-site--footer.png) bottom center no-repeat;
  //   // background: url(./assets/personal-site--footer.png)
  //   background-size: 100% auto;
  //   z-index: -1;
  // }
}


body,
#__nuxt,
#__layout,
#layout {
  // min-height: 100%;
  // width: $fullWidth;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
}

#__nuxt {
  // background: url(~/assets/personal-site--header.png) no-repeat top center;
  // background-attachment: fixed;
  // background-size: 100%;
  background-image:
  url(~/assets/personal-site--header.png),
    url(~/assets/personal-site--footer.png),
    url(~/assets/personal-site--bg.jpg);
  
  background-attachment: fixed, initial, initial;
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: top center, bottom center;
  background-size: 100%, 100%, auto;
}

#layout {
  --footerHeight: 0px;
  position: relative;
  
  main {
    padding-bottom: var(--footerHeight)
  }
}

header:before {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

header:before,
#stars {
  /* // background: url(./assets/personal-site--footer.png) top center no-repeat; */
}

#stars {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  //   background: url(./assets/personal-site--header.png) top center no-repeat;
  z-index: -1;
  opacity: .5
}

header:before,
#stars {
  background-size: 100% auto;
  
  @media (max-width: $smallScreen) {
    background-size: auto 120vw
  }
}

main {
  position: relative;
  top: 0;
  left: 0;
  // width: $fullWidth;
  width: 100%;
  min-height: 100%;
  flex: 2;
  z-index: 1;
}

.content {
  padding-top: $headerHeight;
}

$transitionDurationForDebugging: .8s;
.transition--route-slide-left--enter-active,
.transition--route-slide-left--leave-active,
.transition--route-slide-right--enter-active,
.transition--route-slide-right--leave-active {
  transition: opacity $transitionDurationForDebugging;

  .content {
    transition: transform $transitionDurationForDebugging, opacity $transitionDurationForDebugging;
  }
}

.transition--route-slide-left--enter,
.transition--route-slide-right--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(60vmax, 0, 0);
  }
}

.transition--route-slide-right--enter,
.transition--route-slide-left--leave-to {
  opacity: 0;
  
  .content {
    transform: translate3d(-60vmax, 0, 0);
  }
}

.transition--route-slide-left--leave-active,
.transition--route-slide-right--leave-active {
  position: fixed;
  width: 100%;
}

image {
  image-rendering: -webkit-optimize-contrast;
}
</style>
