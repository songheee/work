<template>
  <transition name="slide-fade">
  <div class="side_wrap dash_main">
    <div class="side_list dash_menu">
      <ul class="side_type">
        <p class="side_tit">MAIN MENU</p>
        <li>
          <NuxtLink to="" class="set_on">Dashboard</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Car Rent</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Insight</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Reimburse</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Inbox</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Calender</NuxtLink>
        </li>
      </ul> <!-- //side_type -->

      <ul class="basic_set">
        <p class="side_tit">PREFERENCES</p>
        <li>
          <NuxtLink to="">Settings</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Help&amp;Center</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Dark Mode</NuxtLink>
          <div class="button-cover">
            <div class="turn">
              <input type="checkbox" class="switch_chk" />
              <div class="sun"></div>
              <div class="moon"></div>
            </div>
          </div>
        </li>
        <li>
          <NuxtLink to="" class="logout">Log Out</NuxtLink>
        </li>
      </ul> <!-- //basic_set -->

    </div> <!-- //side_list -->
  </div> <!-- //side_wrap" -->
</transition>
</template>

<script>

export default {
  name: 'CompoMenu',
  data() {
    return {

    }
  },
  methods: {
  },
}
</script>
