<template>
  <div class="category_wrap con">
    <div class="area_wrap">
      <!-- check-area components -->
      <CompoChkArea></CompoChkArea>
      <!-- // check-area components -->

      <!-- main-menu components -->
      <CompoMainMenu></CompoMainMenu>
      <!-- // main-menu components -->

      <div class="catgy_list">

        <!-- pick-drop components -->
        <CompoPickDrop></CompoPickDrop>
        <!-- // pick-drop components -->

        <div class="car_list_wrap">
          <div class="basicList_list">

            <!-- carList components -->
            <CompoCarList :car-list-item="BasicList"></CompoCarList>
            <CompoCarList v-if="listMore" :car-list-item="BasicList"></CompoCarList>
            <!-- // carList components -->

          </div> <!-- // basicList_list -->
          <div class="more_btn">
            <button type="button" :class={dash_main:listMore} @click="show">Show more car</button>
            <span>120 Car</span>
          </div>
        </div>
      </div>
    </div>
  </div> <!-- //category_wrap -->
</template>

<script>

export default {
  data() {
    return {
      BasicList: this.$store.state.BasicList,
      val:100,
    }
  },
  computed:{
    listMore(){
      return this.$store.state.listMore
    }
  },
  methods:{
    show(){
      this.$store.commit('show');
    }
  }
}
</script>