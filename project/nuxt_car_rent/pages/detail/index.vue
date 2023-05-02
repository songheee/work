<template>
  <div class="detail_wrap con">
    <div class="area_wrap">
      <!-- check-area components -->
      <CompoChkArea :chk-show="true" ></CompoChkArea>
      <!-- // check-area components -->

      <!-- main-menu components -->
      <CompoMainMenu></CompoMainMenu>
      <!-- // main-menu components -->

      <div class="dti_section">
        <div class="pre_car_info">
          <div class="pre_img">
              <div class="b_view">
                <p>Sports car with the best design and acceleration</p>
                <p>Safety and comfort while driving a futuristic and elegant sports car</p>
              </div>
              <div class="s_view">
                <ul>
                  <li class="pre_on">img1</li>
                  <li>img2</li>
                  <li>img3</li>
                </ul>
              </div>
          </div>
          <div class="car_item_dti">
            <div class="img_txt">
              <p class="car_tit">{{CarInfo.Name}}</p>
              <button type="button" class="like_btn_on dti_btn">like</button>
              <span class="star" :class="`star_c${CarInfo.reviewCount}`"></span>
              <span class="review"><span>{{CarInfo.reviewNum}}</span>+ Reviewer</span>
              <p class="car_exp">NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
              <div class="item_dti_info">
                <table>
                  <tbody>
                    <tr>
                      <td>Type Car</td>
                      <td>Sport</td>
                      <td>Capacity</td>
                      <td>2 Person</td>
                    </tr>
                    <tr>
                      <td>Steering</td>
                      <td>Manual</td>
                      <td>Gasoline</td>
                      <td>70 <i>L</i></td>
                    </tr>
                  </tbody>
                </table>
                <div class="car_price">
                  <div>
                    <span>$ {{CarInfo.price}}</span> / <span>day</span>
                    <p><span>{{CarInfo.originPrice}}</span></p>
                  </div>
                  <router-link to="/payment">
                    <button type="button" class="rent_btn">Rent Now</button>
                  </router-link>
                </div>
              </div>
            </div> <!-- //img_txt -->
          </div>
        </div>
        <div class="review_sec">
          <div class="preview_txt_wrap" :class="{'h_on': showAll}" >
            <p class="pre_tit">Reviews</p>
            <ul class="pre_list">
              <li v-for="item in ReviewList" :key="item.id" >
                <div class="self_wrp">
                  <div class="youself">
                    <img :src="item.profile" :alt="item.name" class="profile_img">
                    <div>
                      <p class="pre_name">{{item.name}}</p>
                      <p class="pre_self_tit">{{item.title}}</p>
                    </div>
                  </div>
                  <div class="pre_scope">
                    <p>{{item.date}}</p>
                    <p class="star" :class="`star_c${item.reviewCount}`">
                    </p>
                  </div>
                </div>
                <p class="my_review">{{item.review}}</p>
              </li>
            </ul>
            <button type="button" class="show_all" @click="btnShow()">Show All</button>
          </div>
        </div><!-- //review_sec -->


        <div class="car_list_wrap">
          <div class="car_list_swipe">
            <div class="car_main_wrap">
              <p class="car_list_tit">Recent Car</p>
              <NuxtLink to="/category">
                <button type="button" class="view_all">View All</button>
              </NuxtLink>
            </div>

            <!-- carList components -->
            <CompoCarList :car-list-item="CarListSwipe" :is-swiper="isMobile"></CompoCarList>
            <!-- // carList components -->

          </div> <!-- // car_list_swipe -->

          <div class="car_list_swipe">
            <div class="car_main_wrap">
              <p class="car_list_tit">Recomendation Car</p>
              <NuxtLink to="/category">
                <button type="button" class="view_all">View All</button>
              </NuxtLink>
            </div>

            <!-- carList components -->
            <CompoCarList :car-list-item="resetArray" :is-swiper="isMobile"></CompoCarList>
            <!-- // carList components -->

          </div> <!-- // car_list_swipe -->
        </div> <!-- //car_list_wrap -->


      </div> <!-- //dti_section -->
    </div>
  </div> <!-- //detail_wrap -->
</template>

<script>

  export default {
    name: 'Detail',
    data() {
      return {
        CarInfo: this.$store.state.CarInfo,
        BasicList: this.$store.state.BasicList,
        CarListSwipe: this.$store.state.CarListSwipe,
        ReviewList: this.$store.state.ReviewList,
        isMobile: this.$store.state.isMobile,
        showAll: false,
      }
    },
    computed:{
      resetArray(){
        return this.$store.getters.resetArray
      }
    },
    methods:{
      btnShow(){
        this.showAll = !this.showAll
      },
    },

  }
  </script>