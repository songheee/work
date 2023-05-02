<template>
  <div class="dashboard_wrap con">
    <div class="area_wrap">
      <!-- check-area components -->
      <CompoChkArea></CompoChkArea>
      <!-- // check-area components -->

      <!-- main-menu components -->
      <CompoMainMenu></CompoMainMenu>
      <!-- // main-menu components -->

      <div class="dash_list">
        <div class="dash_datail">
          <p class="dash_rental">Details Rental</p>
          <img :src="require(`~/static/images/contents/maps.png`)" alt="map">
          <div class="img_txt">
            <div class="dash_rent_bord">
              <div class="rental_car">
                <img :src="require(`~/static/images/contents/view_1.png`)" alt="car">
                <div>
                  <p class="car_tit">{{CarInfo.Name}}</p>
                  <span class="car_val">{{CarInfo.value}}</span>
                </div>
              </div>
              <p class="license_plate"># <span>9761</span></p>
            </div>
          </div>
          <!-- pick-drop components -->
          <CompoPickDrop></CompoPickDrop>
          <!-- // pick-drop components -->

          <!-- pick-drop mobile -->
          <div class="l_r_txt m_dashmemu">
            <div class="info_list">
              <div class="rental_select">
                <input id="dash_pay_rd" type="radio" name="pick_drop" checked>
                <label for="dash_pay_rd">Pick - Up</label>
              </div>
              <form>
                <ul class="form_wrap">
                  <li>
                    <p>
                      <label for="Locations">Locations</label>
                      <select id="pick_locations" name="location" class="selectbox">
                        <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Date">Date</label>
                      <select id="pick_date" name="Date" class="selectbox">
                        <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Time">Time</label>
                      <select id="pick_time" name="Time" class="selectbox">
                        <option v-for="item in SelboxTime" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                </ul>
              </form>
            </div> <!-- // info_list -->
            <div class="info_list">
              <div class="rental_select">
                <input id="dash_pay_rd2" type="radio" name="pick_drop">
                <label for="dash_pay_rd2">Drop - Off</label>
              </div>
              <form>
                <ul class="form_wrap">
                  <li>
                    <p>
                      <label for="Locations">Locations</label>
                      <select id="drop_locations" name="location" class="selectbox">
                        <option v-for="item in SelboxLo" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Date">Date</label>
                      <select id="drop_date" name="Date" class="selectbox">
                        <option v-for="item in SelboxDate" :key="item.id" :value="item.name">{{ item.name }}</option>
                      </select>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="Time">Time</label>
                      <select id="drop_time" name="Time" class="selectbox">
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
                <img :src="require(`~/static/images/contents/chart.png`)" alt="chart">
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
              <li v-for="item in RecentDeal" :key="item.id" class="dash_rent_bord">
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
import {mapState} from 'vuex';

export default {
  name:'Dashboard',
  data() {
      return {

      }
  },
  computed: {
    ...mapState(['CarInfo', 'SelboxTime', 'SelboxDate', 'SelboxLo', 'RecentDeal'])
  },
}
</script>