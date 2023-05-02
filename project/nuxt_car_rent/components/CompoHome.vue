<template>
  <div class="home_wrap con">
    <div class="area_wrap">
      <!-- check-area components -->
      <CompoChkArea></CompoChkArea>
      <!-- // check-area components -->

      <div class="ad_section">
        <ul class="pre_img_sec">
          <li>
            <p>The Best Platform for Car Rental</p>
            <p>Ease of doing a car rental safely and <br>reliably. Of course at a low price.</p>
            <NuxtLink to="/payment">
              <button type="button" class="rent_car">Rental Car</button>
            </NuxtLink>
          </li>
          <li>
            <p>Easy way to rent a car at a low price</p>
            <p>Providing cheap car rental services and safe and comfortable facilities.</p>
            <NuxtLink to="/payment">
              <button type="button" class="rent_car">Rental Car</button>
            </NuxtLink>
          </li>
        </ul>

        <!-- pick-drop components -->
        <CompoPickDrop></CompoPickDrop>
        <!-- // pick-drop components -->

        <div class="car_list_wrap">
          <div class="car_list_swipe">
            <div class="car_main_wrap">
              <p class="car_list_tit">Popular Car</p>
              <NuxtLink to="/category">
                <button type="button" class="view_all">View All</button>
              </NuxtLink>
            </div>
            <!-- carList components -->
            <CompoCarList :car-list-item="CarListSwipe" :is-swiper="isMobile"></CompoCarList>
            <!-- // carList components -->

          </div> <!-- // popular_list -->

          <div class="basicList_list">
            <div class="car_main_wrap">
              <p class="car_list_tit">Recomendation Car</p>
            </div>

            <!-- carList components -->
            <CompoCarList :car-list-item="BasicList"></CompoCarList>
            <CompoCarList v-if="listMore" :car-list-item="BasicList"></CompoCarList>
            <!-- // carList components -->

          </div> <!-- // basicList_list -->
          <div class="more_btn">
            <button type="button" :class={dash_main:listMore} @click="show">Show more car</button>
            <span>120 Car</span>
          </div>
        </div> <!-- //car_list_wrap -->
      </div> <!-- //ad_section -->
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: 'CompoHome',
  data() {
      return {
        // CarListSwipe: this.$store.state.CarListSwipe,
        // BasicList: this.$store.state.BasicList,
        // isMobile: this.$store.state.isMobile,
      }
  },
  computed: {
    // BasicList() {
      //   return this.$store.state.BasicList
      // }
      ...mapState(['CarListSwipe', 'BasicList', 'isMobile']),
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