<template>
  <div>
    <div @click="fire" :class="filters" class="filter-item" :style="`background-image:url(${uploadImg})`">
      <slot></slot>
      <!-- <button @click="fire">버튼</button> -->

      <!-- slot여러개 사용할때 -->
      <!-- <slot name="a"></slot>
      <slot name="b"></slot> -->
    </div>
    <!-- :class="`${item} filter-item`"  // :class="item +` filter-item`"-->
    <!--위에 div안에 {{ filters  }}데이터 바인하면 사진위에 필터명을 표기해줄수있다  -->
    <!-- slot 으로 부모 -> 자식 데이터 전송 props랑 동일 -->
    <!-- container인 부모페이지에서 FilterBox사이에 넣은게 slot안으로 들어온다 -->
    <!-- 유의점은 props는 src, style 속성 이런 곳에서도 사용가능하지만
      slot은 HTML 태그여서 HTML 태그처럼만 사용가능 -->

      <!-- slot props  : 부모가 자식에 있는 데이터를 사용해야할때-->
      <!-- 1. <slot :자식데이터="자식데이터"  -> props로 보내는 문법 똑같음</slot> -->
      <!-- 2. 부모는 {{ 자식데이터 }} 로 사용하면됨 -->
      <!-- 3. 부모는 <template slot="작명">{{ 작명.자식데이터 }}</template> -->
  </div>
</template>

<script>

export default {
  name: 'Filterbox',
  props: {
    uploadImg: String,
    item: String,
    filters: String,
  },
  methods: {
    fire() {
      this.emitter.emit('filterClick', this.filters)  // ('작명', 데이터)
    }
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>