<template>
  <div>
    <div v-for="(item, idx) in pOneRoomData" :key="idx">
      <img :src="item.image" :alt="item.title" class="room-img">
      <h4 @click="Compomodal">{{ item.title }}</h4>
      <p> {{ item.price }}만원</p>
      <button @click="incrementCounter(idx)">허위매물신고</button>
      <span>신고수 : {{ item.num }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits  } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});
const pOneRoomData = ref(props.data);

const emit = defineEmits(['increment', 'com-Modal']);
function incrementCounter(idx) {
  emit('increment', idx); // 'increment'라는 이벤트를 발생시킴
}

function Compomodal() {
  emit('com-Modal');
}


</script>

<style>

</style>