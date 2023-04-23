<template>
  <div :class="{'swiper': is_swiper}">
    <ul class="car_list" :class="{'swiper-wrapper': is_swiper}">

      <!-- for문 -->
        <li class="car_item" :class="{'swiper-slide': is_swiper}" v-for="item in car_list_item" :key="item.id">
          <div class="car_sub_tit">
            <p class="list_name">{{item.name}}</p>
            <button type="button" :class="{'like_btn_on': item.isLike}"  @click="toggleBtnLike($event,item)" class="like_btn">like</button>
          </div>
          <p class="list_type">{{item.type}}</p>
          <router-link to="/detail">
            <div class="car_detail">
              <img :src="item.carImg" :alt="item.name" class="car_img">
              <ul>
                <li class="icon_oil">{{item.oil}}</li>
                <li class="icon_manual">Manual</li>
                <li class="icon_people">{{item.people}}</li>
              </ul>
            </div>
          </router-link>
          <div class="car_price">
            <div>
              <span>$ {{item.price}}</span> / <span>day</span>
              <p><span>{{item.originPrice}}</span></p>
            </div>
            <router-link to="/payment">
              <button type="button" class="rent_btn">Rent Now</button>
            </router-link>
          </div>
        </li>
        <!-- // for문 -->
    </ul>
  </div>
</template>

<script>
module.exports = {
  mixins: [cpMixin],
  props: {
    car_list_item: Array,
    is_swiper: Boolean,
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    toggleBtnLike(e, item) {
      item.isLike = !item.isLike
    },
  },
  mounted(){
    if(this.cpIsMobile) {
      const swiper = new Swiper(".swiper", {
          grabCursor: true,
          slidesPerView: 1.35,
          spaceBetween: 17,
          centerInsufficientSlides: true,
      });
    }else {

    }
  },
}
</script>
