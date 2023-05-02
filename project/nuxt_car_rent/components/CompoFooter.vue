<template>
  <footer class="footer">
    <div class="first_line">
      <div class="foot_logo">
        <router-link to="/home">
          <img :src="require(`~/static/images/header/Logo.png`)" alt="morent">
        </router-link>
        <p>Our vision is to provide convenience and help increase your sales business.</p>
      </div>
      <ul>
        <li class="f_tit"><span>About</span>
          <ul>
            <li><a href="#none">How it works</a></li>
            <li><a href="#none">Featured</a></li>
            <li><a href="#none">Partnership</a></li>
            <li><a href="#none">Bussiness Relation</a></li>
          </ul>
        </li>
        <li class="f_tit"><span>Community</span>
          <ul>
            <li><a href="#none">Events</a></li>
            <li><a href="#none">Blog</a></li>
            <li><a href="#none">Podcast</a></li>
            <li><a href="#none">Invite a friend</a></li>
          </ul>
        </li>
        <li class="f_tit"><span>Socials</span>
          <ul>
            <li><a href="#none">Discord</a></li>
            <li><a href="#none">Instagram</a></li>
            <li><a href="#none">Twitter</a></li>
            <li><a href="#none">Facebook</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="secon_line">
      <p>©2022 MORENT. All rights reserved</p>
      <div>
        <p>Privacy &amp; Policy</p>
        <p>Terms &amp; Condition</p>
      </div>
    </div>
  </footer>
</template>


<script>

export default {
  name: 'CompoFooter',
  data() {
      return {

      }
  }
}
</script>
