<template>
  <div class="black-bg" v-if="pModalShow">
    <div class="white-bg">
      <img :src="pOneRoomData[pDataIdx].image" :alt="pOneRoomData[pDataIdx].title" style="width: 100%;">
      <h4>{{ pOneRoomData[pDataIdx].title }}</h4>
      <p>{{ pOneRoomData[pDataIdx].content }}</p>
      <p>{{ pOneRoomData[pDataIdx].price }}원</p>
      <button>닫기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
//defineProps는 부모 컴포넌트로부터 전달받은 props를 사용할 수 있도록 만들어줌

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  dataIdx: {
    type: Number,
    default: 0
  },
  modalShow: {
    type: Boolean,
    default: false
  },
});
const pOneRoomData = ref(props.data); 
const pDataIdx = ref(props.dataIdx);
const pModalShow  = ref(props.modalShow);


</script>

<style>
.black-bg{
  width:100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  padding:20px;
}
.white-bg{
  width:100%;
  background: #fff;
  border-radius: 8px;
  padding:20px;
}
</style>