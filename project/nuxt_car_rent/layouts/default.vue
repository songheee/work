<template>
  <div id='app'>
    <div id= 'wrapper'>
      <div id= 'container'>
          <CompoHeader />
          <!-- pages -> index.vue 파일을 불러온다 -->
          <Nuxt class="conponents" :class="{'car_list_on': cpToggleFltrNav, 'dash_main_on':cpToggleMenu}" />

          <CompoFooter />
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name:'Default',
  data() {
      return {

      }
  },
  computed: {
    // fliter menu
    cpToggleFltrNav() {
      return this.$store.state.cpToggleFltrNav
    },
    // dashborder menu (mo)
    cpToggleMenu(){
      return this.$store.state.cpToggleMenu
    },
  },
  created() {
    // 디바이스 체크 (모바일일때 체크)
    if (process.browser){
      // this.$store.commit('checkDevice');
        this.checkDevice();
    }
  },
  methods: {
    checkDevice(){
      this.$store.commit('checkDevice')
    }
  }
}
</script>