<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!------------------ 반복문 사용 ---------------------->
    <div class="menu">
      <a v-for="(item, idx) in menu" :key="idx">{{ item }}</a>
    </div>

    <CompoCard :data="oneRoomData" @increment="increase" @com-Modal="modal"/>

    <!-- 메인내용
      <div v-for="(item, idx) in oneRoomData" :key="idx">
      <img :src="item.image" :alt="item.title" class="room-img">
      <h4 @click="modal(); clickModal(idx)">{{ item.title }}</h4>
      <p> {{item.price}}만원</p>
      <button @click="increase(idx)">허위매물신고</button>
      <span>신고수 : {{ item.num }}</span>
    </div> -->
    
    <!-- 모달창 -->
    <!-- <div v-if="show" class="black-bg">
      <div class="white-bg">
        <img :src="oneRoomData[clickIdx].image" :alt="oneRoomData[clickIdx].title" style="width: 100%;">
        <h4>{{oneRoomData[clickIdx].title}}</h4>
        <p>{{ oneRoomData[clickIdx].content }}</p>
        <p>{{oneRoomData[clickIdx].price}}원</p>
        <CompoDiscount />
        <button @click="modal">닫기</button>
      </div>
    </div> -->
    <CompoModal :data="oneRoomData" :dataIdx="clickIdx" :modalShow="show"/>

    <CompoDiscount />

  </div>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref(
  ['Home', 'Shop', 'About']
)
/* let products = ref(
  [
    { id: 1, name: '역삼동원룸', price: 70, num: 0, img: require('./assets/room0.jpg') },
    { id: 2, name: '천호동원룸', price: 80, num: 0, img: require('./assets/room1.jpg') },
    { id: 3, name: '마포구원룸', price: 50, num: 0, img: require('./assets/room2.jpg') },
  ],
) */
const show = ref(false)

const clickIdx = ref(0)

// 비동기적으로 테이터와 컴포넌트 가져오기
const oneRoomDataPromise = import('./assets/oneroom.js');
const discountPromise = import('./components/CompoDiscount.vue');
const modalPromise = import('./components/CompoModal.vue');
const cardPromise = import('./components/CompoCard.vue');

// 모듈이 로드되면 oneRoomData에 데이터를 할당하고 화면에 렌더링되도록 함
let oneRoomData = ref([]);  // -> data()여기에 쓴거랑 동일함
let CompoDiscount = ref([]);
let CompoModal = ref([]);
let CompoCard = ref([]);

/* 
이렇게 일일히 불러오는방법이 있고 아래처럼 async써서 사용하는게 코드단축됨
// ES6 방식의 비동기적 모듈 가져오기
//oneRoomDataPromise.then() 메서드는 Promise 객체가 완료될 때(즉, 모듈이 로드되면) 실행되는 콜백 함수를 등록
oneRoomDataPromise.then(module => {  //module은 import() 함수가 가져온 외부 모듈의 내용을 나타냄
  oneRoomData.value = module.default;
});
discountPromise.then(module => {
  CompoDiscount.value = module.default;
}) 
*/

// 비동기 함수를 선언하고 바로 호출하여 데이터를 가져오도록 함
(async () => {
  oneRoomData.value = (await oneRoomDataPromise).default;
  CompoDiscount.value = (await discountPromise).default;
  CompoModal.value = (await modalPromise).default;
  CompoCard.value = (await cardPromise).default;
})();


//허위신고 카운팅 
function increase(idx) {
  oneRoomData.value[idx].num++;
}

//모당창열기
function modal(){
  show.value = !show.value
  console.log(show.value)
  //show.value = value; //이렇게 쓸때는 modal(value)로 값을 받아와서 위에쓰는곳에서도 @click="Modal(true)"라고 써줘야함
}
/* 
//클릭한 모달창 열기
//모달창 클릭시 클릭한내용의 인덱스를 팝업에 넣기
function clickModal(idx) {
  clickIdx.value = idx
}
 */




/* 
import oneRoomData from './assets/oneroom.js';  // oneRoomData는 작명한거
import Discount from './components/CompoDiscount.vue';

export default {
  name: 'App',
  data() {
    return {
      menu: ['Home', 'Shop', 'About'],
      products: [
        { id: 1, name: '역삼동원룸', price: 70, num: 0, img: require('./assets/room0.jpg') },
        { id: 2, name: '천호동원룸', price: 80, num: 0, img: require('./assets/room1.jpg') },
        { id: 3, name: '마포구원룸', price: 50, num: 0, img: require('./assets/room2.jpg') },
      ],
      Show: false,
      clickModal:0,
    }
  },
  components: {
    
  },
  methods:{
    increase(idx){
      this.products[idx].num++;
    },
    modal(value){
      // this.Show = !this.Show;
      this.Show = value;
    },
  },
  components: {
    Discount
  }
} */
</script>

<style>
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;;
}
.menu a{
  color: #fff;
  padding: 10px;
}
.room-img{
  width:500px;
  margin-top:40px;
}
.discount{
  background: #eee;
  padding:10px;
  margin:10px;
  border-radius: 5px;
}
</style>
