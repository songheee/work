<template>
  <div>
    <div v-if="step == 0">
      <Post v-for="(item, idx) in gramData" :key="idx" :gramData="item" :idx="idx" />
    </div>


    <!-- 필터선택페이지 -->
    <div v-if="step == 1"> <!-- :style="{ backgroundImage: `url(${uploadImg})`}" -->
      <div class="upload-image" :class="selectFilter" :style="`background-image:url(${uploadImg})`"></div>
      <div class="filters">
        <FilterBox v-for="item in filters" :key="item" :uploadImg="uploadImg" :filters="item">
          {{ item }}
        <!-- 이안에 넣은게 자식인 fliterbox의 slot에 들어간다 -->
        <!-- slot여러개 -->
        <!--
        <template v-sloa:a>데이터1</template>
        <template v-sloa:b>데이터2</template>
        slot props
        <template v-sloa:default="작명">{{ 작명.msg }}</template>
        -->

        </FilterBox>
        <!-- :item="item" 이미 반복문이 돌아가고 있으니까 이걸 전송해도 된다 -->
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div class="upload-image" :class="selectFilter" :style="`background-image:url(${uploadImg})`"></div>
      <div class="write">
        <textarea @input="$emit('writeData', $event.target.value)" class="write-box">write!</textarea>
        <!-- evetn.target.value :타이핑한 글 -->
      </div>
    </div>

    <!-- 마이페이지 -->
    <div v-if="step == 3">
      <MyPage :one="1" />
    </div>

  </div>
</template>

<script>
import FilterBox from './CompoFilterBox.vue';
import Post from './CompoPost.vue';
import MyPage from './CompoMyPage.vue';


export default {
  name: 'Comtainer',
  props: {
    gramData: Array,
    step: Number,
    uploadImg: String,
  },
  data() {
    return {
      filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      selectFilter:'',  /* 여기에 선택한 필터가 저장됨 */
    }
  },
  components: {
    FilterBox,
    Post,
    MyPage,
  },
  mounted() {
    //클릭한 데이터를 여기서 받아옴
    this.emitter.on('filterClick', (a) => {
      this.selectFilter = a
    });
  },
}
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>