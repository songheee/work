<template>
  <div id="app">
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="next">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <!-- vuex로 store에 있는 데이터 불러오기 -->
    <h4>안녕{{ $store.state.name }}</h4>
    <h4>안녕{{ name }}{{ age }}</h4> <!-- computed에 저장해두었기때문에 위에처럼 안쓰고 name으로만 써도 된다 -->
    <p>{{ $store.state.age }}</p>

    <!-- 클릭하면 데이터를 직접수정이 가능하지만 하면안됨 -->
    <button @click="$store.state.name = 'park' ">버튼</button>

    <!-- click 하면 store.js에 바꾸라고 하는 코드 -->
    <!-- store.js에서 정의한 함수를 넣는다, $store.commit(함수명->텍스트형식으로작성) mutations 실행-->
    <!-- computed에 mapMutations로 함수를 저장하면 $store.commit생략가능 -->
    <button @click="$store.commit('nameChange')">이름변경1</button>
    <button @click="nameChange()">이름변경2</button>

    <button @click="$store.commit('ageChange', 10)">나이변경</button> <!-- 10이라고 쓰는건 store.js에게 데이터 전달 -->

    <!-- methods안에 만든 함수(now)이므로 버튼을 클릭할때마다 재실행됨/ 시간이 변경된다-->
    <!-- computed안에 만든 함수(now2) ()없이작성/ 시간이 로드될때시간그대로임-->
    <P>{{ now2 }}{{ btncount }}</P>
    <button @click="btncount++">시간 버튼</button>

    <!-- 더보기 버튼 actions실행해달라는 함수 dispatch-->
    <!-- <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기</button> -->

    <Container :gramData="gramData" :step="step" :uploadImg="uploadImg" @writeData="writeData = $event"/>

    <!-- <button @click="more">더보기</button> -->
    <!-- 클릭하면 추가내용을 계속적으로 보여주기 위에버튼은 2개만보이게되어있음 -->
    <button @click="$store.dispatch('getData')" class="btn-more">더보기</button>


    <div class="footer">
      <ul class="footer-button-plus">
        <!-- @change는 input에 데이터가 변했을때 코드 실행 -->
        <!-- accept="image/*" 는 img파일만 선택할수있게해준다 그런데 완벽하지않음 -->
        <input @change="upload" accept="image/*" multiple type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <!-- tab -->
    <button @click="tabActive(0)">버튼0</button>
    <button @click="tabActive(1)">버튼1</button>
    <button @click="tabActive(2)">버튼2</button>
    <button @click="tabActive(3)">버튼3</button>

    <div>{{ tabContent[step].content }}</div>
    <!-- <div v-if="tabStep == 0">내용0</div> -->

  </div>
</template>

<script>
import axios from 'axios';
import gram from './assets/instargram.js';
import Container from './components/CompoContainer.vue';
import { mapState, mapMutations} from 'vuex';


export default {
  name: 'App',
  data() {
    return{
      gramData: gram,
      morePost: 0,
      step: 0,
      tabContent: [
        {
          id: 0,
          content: 'tab 내용 0'
        },
        {
          id: 1,
          content: 'tab 내용 1'
        },
        {
          id: 2,
          content: 'tab 내용 2'
        },
        {
          id: 3,
          content: 'tab 내용 3'
        },
      ],
      uploadImg: '',
      writeData: '',
      selectFilter:'',
      btncount:0,
    }
  },
  computed:{
    //함수를 만들때 사용
    // 함수를 사용해도 실행되지않음 , 컴포넌트로드시 한번 실행되고 그 값을 계속 저장해서 씀
    //계산결과 저장용 함수들
    now2(){
      return new Date()
    },
    //state에서 데이터를 꺼내쓸때 computed에 선언해두면 편리
    //$store.state.name 이렇게해서 가져오던걸 name으로만 해도됨
    name(){
      return this.$store.state.name
    },
    // 위에처럼 하나씩 데이터를 가져오는게 아니래 mapState를 쓰면 한꺼번에 작성할수있다
    // vue문법이기때문에 import해서 사용가능 (위에서 import해줘야함)
    ...mapState(['name', 'age', 'likes']),
    ...mapState({작명 : 'name'}),  //name을 가져다쓰는데 다른이름으로 쓰고싶을때

    //mutations함수도 가져다 쓸수있다
    ...mapMutations(['nameChange', 'likeChange', 'increPost']),
  },
  methods: {
    now(){
      //함수는 사용할때마다 실행됨
      return new Date()
    },

    //axio.post('URL',{name : 'kim'}).then(성공시 코드실행 ).catch(실패시 코드실행)
    //.then(function(){ })  -> .then((결과) =>{ }) 화살표 함수 사용 그래야지 안에서 사용해는 this가 위에서 선언한 this로 받아올수있다
    //GET요청으로 가져온 데이터는 result 라는 파라미터에 담겨있다.
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.morePost}.json`)
        .then((result) => {   //콜백함수(함수안에 함수)
          this.gramData.push(result.data);  // push는 array에 데이터 추가하는 문법
          this.morePost++;
      })
    },
    tabActive(idx) {
      this.step = idx;
    },
    //업로드한 이미지를 볼수있게 해주는 함수
    upload(e) {  //e = event와 관련된 정보가 저장됨
      let a = e.target.files; /* 업로드한 파일을 리스트로 알려줌 */
      console.log(a);
      // FileReader() 파일을 글자로 변환해서 이미지 src에 넣을 수 있게 도와주는 함수
      // URL.createObjectURL() URL을 생성해주는 함수
      let url = URL.createObjectURL(a[0]);
      console.log(url);
      //props로 위에 url을 보내줘야하는데 props는 데이터만 보낼수있으니까 여기에 있는 데이터를 보낼때는 아래처럼 만듬
      this.uploadImg = url;  //위에 만든 변수에 url을 넣는다
      this.step++;
    },
    next() {
      if (this.step < 2){
        this.step++;
      }
    },
    publish() {
      //발행버튼을 누르면 게시물이 gramData에 추가되야함
      let myList = {
        name: "Jemma",
        userImage: "https://placeimg.com/100/100/animals",
        postImage: this.uploadImg, //내가 업로드한 url
        likes: 90,
        date: "Apr 25",
        liked: false,
        content: this.writeData,  //내가입력한 글
        filter: this.selectFilter,
      };
      this.gramData.unshift(myList); //unshift() array에다가 데이터 하나 추가하는 자바스크립트 문법
      this.step = 0;  //업로드시 step을 0으로 이동
    },
  },
  mounted() {
    //mitt 사용법
    //작명이라는 이벤트를 발사하면 안에 있는 코드를 실행
    /* this.emitter.on('작명', (a) => {
      console.log(a)
    }); */
    //클릭한 데이터를 여기서 받아옴
    this.emitter.on('filterClick', (a) => {
      this.selectFilter = a
    });
  },
  components: {
    Container,
  }
}
</script>

<style>
@import 'style.css';

.btn-more{
  outline: none;
  background: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
}
.btn-more:hover{
  color:blue;
}

</style>
