<!-- eslint-disable no-unreachable -->
<template>
  <div class="payment_wrap con">
    <div class="pay_info">
      <div class="sub_tit">
        <div class="l_r_txt">
          <div class="info_list">
            <p>Billing Info</p>
            <dl>
                <dt>Please enter your billing info</dt>
                <dd>Step 1 of 4</dd>
            </dl>
            <form>
              <ul class="form_wrap">
                <li>
                  <p>
                    <label for="name">Name</label>
                    <input id="name" placeholder="Your name" autofocus type="text">
                  </p>
                </li>
                <li>
                  <p>
                    <label for="Number">Phone Number</label>
                    <input id="Number" placeholder="Phone number" autofocus type="text">
                  </p>
                </li>
                <li>
                  <p>
                    <label for="Address">Address</label>
                    <input id="Address" placeholder="Address" autofocus type="text">
                  </p>
                </li>
                <li>
                  <p>
                    <label for="City">Town / City</label>
                    <input id="City" placeholder="Town or city" autofocus type="text">
                  </p>
                </li>
              </ul>
            </form>
          </div>
        </div> <!-- // l_r_txt -->
        <div class="l_r_txt">
          <div class="info_list">
            <p>Rental Info</p>
            <dl>
                <dt>Please select your rental date</dt>
                <dd>Step 2 of 4</dd>
            </dl>
            <div class="rental_select">
              <input id="pay_rd" type="radio" name="pick_drop" checked>
              <label for="pay_rd">Pick - Up</label>
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
              <input id="pay_rd2" type="radio" name="pick_drop">
              <label for="pay_rd2">Drop - Off</label>
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

        <div class="l_r_txt">
          <div class="info_list">
            <p>Payment Method</p>
            <dl>
                <dt>Please enter your payment method</dt>
                <dd>Step 3 of 4</dd>
            </dl>
            <div class="other_wrap">
              <div class="rental_select">
                <input id="pay_rd3" type="radio" name="pay_type">
                <label for="pay_rd3" class="credit_visa">Credit Card</label>
              </div>
              <form>
                <ul class="form_wrap">
                  <li>
                    <p>
                      <label for="CardNumber">Card Number</label>
                      <input id="CardNumber" placeholder="Card number" autofocus type="text">
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="ExprationDate">Expration Date</label>
                      <input id="ExprationDate" placeholder="DD / MM / YY" autofocus type="text">
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="CardHolder">Card Holder</label>
                      <input id="CardHolder" placeholder="Card holder" autofocus type="text">
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="CVC">CVC</label>
                      <input id="CVC" placeholder="CVC" autofocus type="password">
                    </p>
                  </li>
                </ul>
              </form>
            </div>
            <div class="other_wrap">
              <div class="rental_select">
                <input id="pay_rd4" type="radio" name="pay_type">
                <label for="pay_rd4" class="credit_paypal">PayPal</label>
              </div>
            </div>
            <div class="other_wrap">
              <div class="rental_select">
                <input id="pay_rd5" type="radio" name="pay_type">
                <label for="pay_rd5" class="credit_bitcoin">Bitcoin</label>
              </div>
            </div>
          </div>
        </div> <!-- // l_r_txt -->
        <div class="l_r_txt">
          <div class="info_list comfirm_chk">
            <p>Confirmation</p>
            <dl>
                <dt>We are getting to the end. Just few clicks and your rental is ready!</dt>
                <dd>Step 4 of 4</dd>
            </dl>
            <div class="other_wrap">
              <div class="rental_select">
                <input id="pay_chk1" type="checkbox" name="confirm">
                <label for="pay_chk1" class="confirm_txt">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
              </div>
            </div>
            <div class="other_wrap">
              <div class="rental_select">
                <input id="pay_chk2" type="checkbox" name="confirm">
                <label for="pay_chk2" class="confirm_txt">I agree with our <span>terms and conditions</span> and <span>privacy policy.</span></label>
              </div>
            </div>
            <button type="button" class="rentbtn">Rent Now</button>
            <div class="safe_mark">
              <p>vrstva_mark</p>
              <dl>
                <dt>All your testData are safe</dt>
                <dd>We are using the most advanced security to provide you the best experience ever.</dd>
              </dl>
            </div>
          </div>
        </div> <!-- // l_r_txt -->

      </div>
    </div>


    <div class="side_item">
      <div class="sub_tit">
        <p>Rental Summary</p>
        <P class="summmay">Prices may change depending on the length of the rental and the price of your rental car.</P>
      </div>
      <div class="preview">
        <img :src="require(`~/static/images/contents/view_1.png`)" alt="preview">
        <div class="img_txt">
          <p class="car_tit">{{CarInfo.Name}}</p>
          <span class="star" :class="`star_c${CarInfo.reviewCount}`"></span>
          <span class="review"><span>{{CarInfo.reviewNum}}</span>+ Reviewer</span>
        </div>
      </div>
      <div class="price">
        <dl>
          <dt>Subtotal</dt>
          <dd>$<span>{{CarInfo.price}}</span></dd>
        </dl>
        <dl>
          <dt>Tax</dt>
          <dd>$<span>{{CarInfo.priceInit}}</span></dd>
        </dl>
        <div class="pay_wrap">
          <input type="text" class="paycode input_box" placeholder="Apply promo code">
          <span>Apply now</span>
        </div>
        <div class="total">
          <div class="total_txt">
            <span>Total Rental Price</span>
            <span class="total_info">Overall price and includes rental discount</span>
            <span class="total_info hide">Overall price rental</span>
          </div>
          <span class="total_num">$<span>{{CarInfo.price}}</span></span>
        </div>
      </div>
    </div> <!-- //side_item -->


  </div>
</template>

<script>

export default {
  name:'PagePayment',
  data() {
    return {
      CarInfo: this.$store.state.CarInfo,
      SelboxTime: this.$store.state.SelboxTime,
      SelboxDate: this.$store.state.SelboxDate,
      SelboxLo: this.$store.state.SelboxLo,
    }
  },
}
</script>
