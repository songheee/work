<template>
  <transition name="slide-fade">
  <div class="side_wrap dash_main">
    <div class="side_list dash_menu">
      <ul class="side_type">
        <p class="side_tit">MAIN MENU</p>
        <li>
          <router-link to="" class="set_on">Dashboard</router-link>
        </li>
        <li>
          <router-link to="">Car Rent</router-link>
        </li>
        <li>
          <router-link to="">Insight</router-link>
        </li>
        <li>
          <router-link to="">Reimburse</router-link>
        </li>
        <li>
          <router-link to="">Inbox</router-link>
        </li>
        <li>
          <router-link to="">Calender</router-link>
        </li>
      </ul> <!-- //side_type -->

      <ul class="basic_set">
        <p class="side_tit">PREFERENCES</p>
        <li>
          <router-link to="">Settings</router-link>
        </li>
        <li>
          <router-link to="">Help&amp;Center</router-link>
        </li>
        <li>
          <router-link to="">Dark Mode</router-link>
          <div class="button-cover">
            <div class="turn">
              <input type="checkbox" class="switch_chk" />
              <div class="sun"></div>
              <div class="moon"></div>
            </div>
          </div>
        </li>
        <li>
          <router-link to="" class="logout">Log Out</router-link>
        </li>
      </ul> <!-- //basic_set -->

    </div> <!-- //side_list -->
  </div> <!-- //side_wrap" -->
</transition>
</template>

<script>
module.exports = {
  mixins: [cpMixin],

  data() {
    return {

    }
  },
  methods: {
  },
}
</script>
