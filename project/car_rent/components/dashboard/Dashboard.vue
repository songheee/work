<template>
  <div class="dashboard_wrap con">
    <div class="area_wrap">
      <!-- check-area components -->
      <check-area></check-area>
      <!-- // check-area components -->

      <!-- main-menu components -->
      <main-menu></main-menu>
      <!-- // main-menu components -->

      <div class="dash_list">
        <div class="dash_datail">
          <p class="dash_rental">Details Rental</p>
          <img :src="ImgPath.Urlcontents+'maps.png'" alt="map">
          <div class="img_txt">
            <div class="dash_rent_bord">
              <div class="rental_car">
                <img :src="ImgPath.Urlcontents+'view_1.png'" alt="car">
                <div>
                  <p class="car_tit">{{CarInfo.Name}}</p>
                  <span class="car_val">{{CarInfo.value}}</span>
                </div>
              </div>
              <p class="license_plate"># <span>9761</span></p>
            </div>
          </div>
          <!-- pick-drop components -->
          <pick-drop></pick-drop>
          <!-- // pick-drop components -->

          <!-- pick-drop mobile -->
          <div class="l_r_txt m_dashmemu">
            <div class="info_list">
              <div class="rental_select">
                <input type="radio" id="dash_pay_rd" name="pick_drop" checked>
                <label for="dash_pay_rd">Pick - Up</label>
              </div>
              <form>
                <ul class="form_wrap">
                  <li>
                    <p>
                      <label for="Locations">Locations</label>
                      <select name="location" id="pick_locations" class="selectbox">
                        <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Date">Date</label>
                      <select name="Date" id="pick_date" class="selectbox">
                        <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Time">Time</label>
                      <select name="Time" id="pick_time" class="selectbox">
                        <option v-for="item in SelboxTime" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                </ul>
              </form>
            </div> <!-- // info_list -->
            <div class="info_list">
              <div class="rental_select">
                <input type="radio" id="dash_pay_rd2" name="pick_drop">
                <label for="dash_pay_rd2">Drop - Off</label>
              </div>
              <form>
                <ul class="form_wrap">
                  <li>
                    <p>
                      <label for="Locations">Locations</label>
                      <select name="location" id="drop_locations" class="selectbox">
                        <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Date">Date</label>
                      <select name="Date" id="drop_date" class="selectbox">
                        <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Time">Time</label>
                      <select name="Time" id="drop_time" class="selectbox">
                        <option v-for="item in SelboxTime" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                </ul>
              </form>
            </div><!-- // info_list -->
          </div><!-- // l_r_txt -->
          <!-- //pick-drop mobile -->

          <div class="price">
            <div class="total">
              <div class="total_txt">
                <span>Total Rental Price</span>
                <span class="total_info">Overall price and includes rental discount</span>
                <span class="total_info hide">Overall price rental</span>
              </div>
              <span class="total_num">$<span>{{CarInfo.price}}</span></span>
            </div>
          </div><!-- //price -->
        </div>
        <!-- //dash_datail -->
        <div class="dash_rank">
          <div class="pie_graph">
            <p class="dash_rental">Top 5 Car Rental</p>
            <div class="chart_wrap">
              <div class="top_rank">
                <img :src="ImgPath.Urlcontents+'chart.png'" alt="chart">
                <div>
                  <p>72,030</p>
                  <p>Rental Car</p>
                </div>
              </div>
              <div class="chart_item">
                <dl>
                  <dt>Sport Car</dt>
                  <dd><span>17,439</span></dd>
                </dl>
                <dl>
                  <dt>SUV</dt>
                  <dd><span>17,439</span></dd>
                </dl>
                <dl>
                  <dt>Coupe</dt>
                  <dd><span>18,197</span></dd>
                </dl>
                <dl>
                  <dt>Hatchback</dt>
                  <dd><span>12,510</span></dd>
                </dl>
                <dl>
                  <dt>MPV</dt>
                  <dd><span>14,406</span></dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="recent_list">
            <div class="car_main_wrap">
              <p class="dash_rental">Recent Transaction</p>
              <router-link to="/category">
                <button type="button" class="view_all">View All</button>
              </router-link>
            </div>
            <ul class="img_txt">
              <li class="dash_rent_bord" v-for="item in RecentDeal" :key="item.id">
                <div class="rental_car">
                  <img :src="item.Rimg" :alt="item.name">
                  <div>
                    <p class="car_tit">{{item.name}}</p>
                    <span class="car_val">{{item.value}}</span>
                  </div>
                </div>
                <div>
                  <p class="license_plate">{{item.date}}</p>
                  <p class="recent_total">{{item.price}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- //dash_rank -->
      </div><!-- //dash_list -->
    </div>
  </div> <!-- //dashboard_wrap -->
</template>

<script>

module.exports = {
  data() {
      return {
        ImgPath:ImgSrc,
        CarInfo,
        SelboxLo,
        SelboxDate,
        SelboxTime,
        RecentDeal,
      }
  },
  components: {
    'check-area' : CheckArea,
    'pick-drop' : PickDrop,
    'main-menu' : MainMenu,
  },
  methods:{

  }
}
</script>