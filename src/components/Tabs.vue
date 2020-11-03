<template>
  <div class="slide-tab" >
    <div
      ref="wrapper"
      class='tab-wrapper'
    >
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[ current === index ? 'active' : '', 'tab-item']"
        @click="tabClick($event, index)"
        :style="listTabStyle"
      >
        <slot name="tab" :tab="tab" :index="index" />
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      require: true,
      type: Array
    },
    current: {
      require: true,
      type: Number
    },
    dir: {
      type: String,
      default: () => 'ltr'
    }
  },
  data() {
    return {
        listTabStyle:{}
      //tabWidth: 0,
     // minLeft: 0,
      //left: 0,
      //motion: false,
      //preX: 0,
     // wrapperWidth: 0
    }
  },
  computed: {
    dirFlag() {
      return this.dir === 'ltr' ? 1 : -1
    },
    /*tabStyle() {
      return this.tabWidth ? `width: ${this.tabWidth}px;` : ''
    },
    wrapperStyle() {
      const l = this.left * this.dirFlag + 'px'
      return `transform: translate3d(${l}, 0, 0);`
    }*/
  },
  watch: {
    current(v) {
      this.setCurrentTab(v)
    }
  },
   created(){
        // Width of each tab
        this.listTabStyle.width = parseInt(100/this.tabs.length) + "vw"
    },
  mounted() {
    //this.init()
    this.setCurrentTab(this.current)
  },
 /* updated() {
    this.init()
  },*/
  methods: {
   /* init() {
      this.tabWidth = this.$el.offsetWidth
      this.wrapperWidth = this.$refs.wrapper.offsetWidth
      const diff = this.wrapperWidth - this.tabWidth
      this.minLeft = diff > 0 ? diff * -1 : 0
    },*/
    setCurrentTab(index) {
      if (index >= 0 && index < this.tabs.length) {
        const dom = this.$refs.wrapper.children[index]
        if (dom) {
          this.setLeftByDom(dom)
        }
      }
    },
    setLeftByDom(dom) {
      const pos = this.dir === 'rtl' ? (this.wrapperWidth - dom.offsetLeft - dom.offsetWidth / 2) : (dom.offsetLeft + dom.offsetWidth / 2)
      const left = pos - this.tabWidth / 2
      if (left < 0) {
        this.left = 0
      } else if (left > Math.abs(this.minLeft)) {
        this.left = this.minLeft
      } else {
        this.left = left * -1
      }
    },
    
    tabClick(e, index) {
      //this.motion = true
      this.setCurrentTab(index)
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped >
.slide-tab {
  overflow: hidden;
}
.tab-wrapper {
    display: inline-block;
    white-space: nowrap;
    will-change: transform;
}
/*.motion {
    transition: all 0.3s;
}*/
.tab-item {
    vertical-align: top;
    box-sizing: border-box;
    display: inline-block;
    font-size: 4.5vmin;
    padding: 11px;
    text-align: center;
    font-weight: 700;
    color: rgb(101, 119, 134);
    border-bottom: 1px solid rgb(204, 214, 221) ;
}
.active {
    color: rgb(29,161,242);
    border-bottom: 3px solid rgb(29,161,242) ;
}
</style>