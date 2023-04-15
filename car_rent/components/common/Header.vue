<template>
  <header class="head">
    <ul class="header_wrap" :class="{'head_type_1': $route.path.includes('/payment'), 'head_type_2': $route.path.includes('/home')}">
      <li>
        <router-link to="/home">
          <img :src="ImgPath.Urlheader+'Logo.png'" alt="morent">
        </router-link>
      </li>
      <li>
        <div class="search_wrap">
          <input type="text" class="search" placeholder="Search something here">
          <button type="button" class="ico_search">search</button>
          <button class="ico_filter" @click="this.EventBus.$emit('filter')">filter</button>
        </div>
      </li>
      <li>
        <ul class="icon_list">
          <li><button type="button" class="heart">heart</button></li>
          <li><button type="button" class="notice notice_on">notice</button></li>
          <li><button type="button" class="setting">setting</button></li>
          <li>
            <router-link to="/dashboard">
              <img :src="ImgPath.Urlheader+'profile.png'" alt="profile">
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <input class="burger-check" type="checkbox" id="burger-check" @click="this.EventBus.$emit('menu')">
        <label class="burger-icon" for="burger-check">
          <span class="burger-sticks"></span>
        </label>
      </li>
    </ul>
  </header>
</template>

<script>
module.exports = {
  mixins: [cpMixin],
  data() {
      return {
        ImgPath:ImgSrc,
      }
  },
  methods: {

  },
}
  </script>
