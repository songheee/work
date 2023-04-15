<template>
  <div class="category_wrap con">
    <div class="area_wrap">
      <!-- check-area components -->
      <check-area></check-area>
      <!-- // check-area components -->

      <!-- main-menu components -->
      <main-menu></main-menu>
      <!-- // main-menu components -->

      <div class="catgy_list">

        <!-- pick-drop components -->
        <pick-drop></pick-drop>
        <!-- // pick-drop components -->

        <div class="car_list_wrap">
          <div class="basicList_list">

            <!-- carList components -->
            <car-list :car_list_item="BasicList"></car-list>
            <!-- // carList components -->

          </div> <!-- // basicList_list -->
          <div class="more_btn">
            <button type="button">Show more car</button>
            <span>120 Car</span>
          </div>
        </div>
      </div>
    </div>
  </div> <!-- //category_wrap -->
</template>

<script>

module.exports = {
  data() {
      return {
        BasicList,
        val:100,
      }
  },
  components: {
    'car-list' : CarListItem,
    'check-area' : CheckArea,
    'pick-drop' : PickDrop,
    'main-menu' : MainMenu,
  },
  methods:{

  }
}
</script>