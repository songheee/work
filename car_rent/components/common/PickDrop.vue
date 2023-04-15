<template>
  <div class="pick_drop">
    <div class="pick_chk">
      <div class="rental_select">
        <input type="radio" id="pay_rd" name="pick_drop" checked>
        <label for="pay_rd">Pick - Up</label>
      </div>
      <form>
        <ul class="form_wrap select_typ">
          <li>
            <p>
              <label for="Locations">Locations</label>
              <select name="location" id="Locations" class="selectbox">
                <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Date">Date</label>
              <select name="Date" id="Date" class="selectbox">
                <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Time">Time</label>
              <select name="Time" id="Time" class="selectbox">
                <option v-for="item in SelboxTime" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
        </ul>
      </form>
    </div>
    <button type="button" class="swap">swap arrow</button>
    <div class="drop_chk">
      <div class="rental_select">
        <input type="radio" id="pay_rd2" name="pick_drop">
        <label for="pay_rd2">Drop - Off</label>
      </div>
      <form>
        <ul class="form_wrap select_typ">
          <li>
            <p>
              <label for="Locations">Locations</label>
              <select name="location" id="Locations" class="selectbox">
                <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Date">Date</label>
              <select name="Date" id="Date" class="selectbox">
                <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Time">Time</label>
              <select name="Time" id="Time" class="selectbox">
                <option v-for="item in SelboxTime" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
        </ul>
      </form>
    </div>
  </div> <!-- //pick_drop -->
</template>

<script>
module.exports = {
  data() {
    return {
      ImgPath:ImgSrc,
      SelboxLo,
      SelboxDate,
      SelboxTime,
    }
  },
}
</script>
