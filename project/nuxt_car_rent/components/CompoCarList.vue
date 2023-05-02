<template>
  <div>

    <div v-show="!isSwiper">
      <ul class="car_list">

        <!-- for문 -->
        <li v-for="item in carListItem" :key="item.id" class="car_item">
          <div class="car_sub_tit">
            <p class="list_name">{{item.name}}</p>
            <button type="button" class="like_btn" :class="{'like_btn_on': item.isLike}"  @click="toggleBtnLike(item)" >like</button>
          </div>
          <p class="list_type">{{item.type}}</p>
          <NuxtLink to="/detail">
            <div class="car_detail">
              <img :src="require(`~/static/images/contents/${item.carImg}`)" :alt="item.name" class="car_img">
              <ul>
                <li class="icon_oil">{{item.oil}}</li>
                <li class="icon_manual">Manual</li>
                <li class="icon_people">{{item.people}}</li>
              </ul>
            </div>
          </NuxtLink>
          <div class="car_price">
            <div>
              <span>$ {{item.price}}</span> / <span>day</span>
              <p><span>{{item.originPrice}}</span></p>
            </div>
            <NuxtLink to="/payment">
              <button type="button" class="rent_btn">Rent Now</button>
            </NuxtLink>
          </div>
        </li>
        <!-- // for문 -->
      </ul>
    </div>

    <div v-show="isSwiper" v-swiper:mySwiper="swiperOption" class="swiper-container">
      <ul class="car_list swiper-wrapper">

        <!-- for문 -->
        <li v-for="item in carListItem" :key="item.id" class="car_item swiper-slide">
          <div class="car_sub_tit">
            <p class="list_name">{{item.name}}</p>
            <button type="button" class="like_btn" :class="{'like_btn_on': item.isLike}"  @click="toggleBtnLike(item)" >like</button>
          </div>
          <p class="list_type">{{item.type}}</p>
          <NuxtLink to="/detail">
            <div class="car_detail">
              <img :src="require(`~/static/images/contents/${item.carImg}`)" :alt="item.name" class="car_img">
              <ul>
                <li class="icon_oil">{{item.oil}}</li>
                <li class="icon_manual">Manual</li>
                <li class="icon_people">{{item.people}}</li>
              </ul>
            </div>
          </NuxtLink>
          <div class="car_price">
            <div>
              <span>$ {{item.price}}</span> / <span>day</span>
              <p><span>{{item.originPrice}}</span></p>
            </div>
            <NuxtLink to="/payment">
              <button type="button" class="rent_btn">Rent Now</button>
            </NuxtLink>
          </div>
        </li>
        <!-- // for문 -->
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  name: 'CompoCarList',
  props: {
    carListItem: {
      type: [Array, Object],
      default: () => {}
    },
    isSwiper: {
      type:Boolean,
    }
  },
  data() {
    return {
      swiperOption: {
        grabCursor: true,
        slidesPerView: 1.35,
        spaceBetween: 17,
        centerInsufficientSlides: true,
      }
    }
  },
  methods: {
    toggleBtnLike(item) {
      this.$store.commit('toggleBtnLike', item)
    },
  },
}
</script>
