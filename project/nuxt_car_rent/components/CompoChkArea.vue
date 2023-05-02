<template>
  <transition name="slide-fade">
  <div class="side_wrap chk_ty2">
    <div class="side_list">
      <div class="side_type">
        <p class="side_tit">TYPE</p>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="type_chk_1" type="checkbox" name="confirm">
            <label for="type_chk_1" class="confirm_txt">Sport<span>(10)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="type_chk_2" type="checkbox" name="confirm" checked>
            <label for="type_chk_2" class="confirm_txt">SUV <span>(12)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="type_chk_3" type="checkbox" name="confirm">
            <label for="type_chk_3" class="confirm_txt">MPV <span>(16)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="type_chk_4" type="checkbox" name="confirm">
            <label for="type_chk_4" class="confirm_txt">Sedan  <span>(20)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="type_chk_5" type="checkbox" name="confirm">
            <label for="type_chk_5" class="confirm_txt">Coupe <span>(14)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="type_chk_6" type="checkbox" name="confirm" checked>
            <label for="type_chk_6" class="confirm_txt">Hatchback <span>(14)</span></label>
          </div>
        </div>
      </div> <!-- //side_type -->

      <div class="catgy_cap">
        <p class="side_tit">CAPACITY</p>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="cap_chk_1" type="checkbox" name="confirm">
            <label for="cap_chk_1" class="confirm_txt">2 Person<span>(10)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="cap_chk_2" type="checkbox" name="confirm" checked>
            <label for="cap_chk_2" class="confirm_txt">4 Person <span>(14)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="cap_chk_3" type="checkbox" name="confirm" checked>
            <label for="cap_chk_3" class="confirm_txt">6 Person <span>(12)</span></label>
          </div>
        </div>
        <div class="other_wrap">
          <div class="rental_select">
            <input id="cap_chk_4" type="checkbox" name="confirm">
            <label for="cap_chk_4" class="confirm_txt">8 or More  <span>(16)</span></label>
          </div>
        </div>
      </div> <!-- //catgy_cap -->

      <div class="catgy_price">
        <p class="side_tit">PRICE</p>
        <div class="other_wrap">
          <div class="rental_select">
            <input type="range" min="10" max="500" value="" values="val">
            <p>Max. $ <span>{{val}}</span></p>
          </div>
        </div>
      </div>


    </div> <!-- //side_list -->
  </div> <!-- //side_wrap" -->
</transition>
</template>

<script>
export default {
  name: 'CompoChkArea',
  data() {
      return {
        val:100,
      }
  },
}
</script>
