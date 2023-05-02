<template>
  <header class="head">
    <ul class="header_wrap" :class="{'head_type_1': $route.name.includes('payment'), 'head_type_2': $route.name.includes('index')}">
      <li>
        <NuxtLink to="/">
          <img :src="require(`~/static/images/header/Logo.png`)" alt="morent">
        </NuxtLink>
      </li>
      <li>
        <div class="search_wrap">
          <input type="text" class="search" placeholder="Search something here">
          <button type="button" class="ico_search">search</button>
          <button class="ico_filter" @click="filter">filter</button>
        </div>
      </li>
      <li>
        <ul class="icon_list">
          <li><button type="button" class="heart">heart</button></li>
          <li><button type="button" class="notice notice_on">notice</button></li>
          <li><button type="button" class="setting">setting</button></li>
          <li>
            <NuxtLink to="/dashboard">
              <img :src="require(`~/static/images/header/profile.png`)" alt="profile">
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li>
        <input id="burger-check" class="burger-check" type="checkbox" @click="menu">
        <label class="burger-icon" for="burger-check">
          <span class="burger-sticks"></span>
        </label>
      </li>
    </ul>
  </header>
</template>

<script>

export default {
  name: 'CompoHeader',
  data() {
      return {

      }
  },
  methods: {
    filter() {
      this.$store.commit('filter')
    },
    menu() {
      this.$store.commit('menu');
    }
  }
}
</script>