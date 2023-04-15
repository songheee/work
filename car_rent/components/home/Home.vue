<template>
  <div class="home_wrap con">
    <div class="area_wrap">
      <!-- check-area components -->
      <check-area></check-area>
      <!-- // check-area components -->

      <div class="ad_section">
        <ul class="pre_img_sec">
          <li>
            <p>The Best Platform for Car Rental</p>
            <p>Ease of doing a car rental safely and <br>reliably. Of course at a low price.</p>
            <router-link to="/payment">
              <button type="button" class="rent_car">Rental Car</button>
            </router-link>
          </li>
          <li>
            <p>Easy way to rent a car at a low price</p>
            <p>Providing cheap car rental services and safe and comfortable facilities.</p>
            <router-link to="/payment">
              <button type="button" class="rent_car">Rental Car</button>
            </router-link>
          </li>
        </ul>

        <!-- pick-drop components -->
        <pick-drop></pick-drop>
        <!-- // pick-drop components -->

        <div class="car_list_wrap">
          <div class="car_list_swipe">
            <div class="car_main_wrap">
              <p class="car_list_tit">Popular Car</p>
              <router-link to="/category">
                <button type="button" class="view_all">View All</button>
              </router-link>
            </div>

            <!-- carList components -->
            <car-list :car_list_item="CarListSwipe" :is_swiper="cpIsMobile"></car-list>
            <!-- // carList components -->

          </div> <!-- // popular_list -->

          <div class="basicList_list">
            <div class="car_main_wrap">
              <p class="car_list_tit">Recomendation Car</p>
            </div>

            <!-- carList components -->
            <car-list :car_list_item="BasicList"></car-list>
            <!-- // carList components -->

          </div> <!-- // basicList_list -->
          <div class="more_btn">
            <button type="button">Show more car</button>
            <span>120 Car</span>
          </div>
        </div> <!-- //car_list_wrap -->
      </div> <!-- //ad_section -->
    </div>
  </div>
</template>
<script>

module.exports = {
  mixins: [cpMixin],
  data() {
      return {
        CarListSwipe,
        BasicList,
      }
  },
  components: {
    'car-list' : CarListItem,
    'pick-drop' : PickDrop,
    'check-area' : CheckArea,
  },
  mounted(){

  },
}
</script>