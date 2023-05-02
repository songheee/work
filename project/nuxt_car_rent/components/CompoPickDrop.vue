<template>
  <div class="pick_drop">
    <div class="pick_chk">
      <div class="rental_select">
        <input id="pay_rd" type="radio" name="pick_drop" checked>
        <label for="pay_rd">Pick - Up</label>
      </div>
      <form>
        <ul class="form_wrap select_typ">
          <li>
            <p>
              <label for="Locations">Locations</label>
              <select id="Locations" name="location" class="selectbox">
                <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Date">Date</label>
              <select id="Date" name="Date" class="selectbox">
                <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Time">Time</label>
              <select id="Time" name="Time" class="selectbox">
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
        <input id="pay_rd2" type="radio" name="pick_drop">
        <label for="pay_rd2">Drop - Off</label>
      </div>
      <form>
        <ul class="form_wrap select_typ">
          <li>
            <p>
              <label for="Locations">Locations</label>
              <select id="Locations" name="location" class="selectbox">
                <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Date">Date</label>
              <select id="Date" name="Date" class="selectbox">
                <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>
            </p>
          </li>
          <li>
            <p>
              <label for="Time">Time</label>
              <select id="Time" name="Time" class="selectbox">
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
import {mapState} from 'vuex';

export default {
  name:'CompoPickDrop',
  data() {
    return {
      // SelboxTime: this.$store.state.SelboxTime,
      // SelboxDate: this.$store.state.SelboxDate,
      // SelboxLo: this.$store.state.SelboxLo,
    }
  },
  computed: {
    ...mapState(['SelboxTime', 'SelboxDate', 'SelboxLo'])

    // SelboxTime() {
    //   return this.$store.state.SelboxTime
    // }
  },
}
</script>

<!-- 위 3가지 방법으로 데이터 불러올수있음 -->
