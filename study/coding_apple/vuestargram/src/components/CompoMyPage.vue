<template>
  <div>
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="찾기" @input="search($event.target.value)" />
      <div class="post-header" v-for="(item, i) in follower" :key="i">
        <div class="profile" :style="`background-image:url(${item.image})`"></div>
        <span class="profile-name">{{ item.name }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import {onMounted, reactive, ref, toRefs, watch, computed} from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  name:'mypage',
  //composition API써서 개발하려면 setup()안에 코드짜야함
  // ( ) 안에 데이터생성,조작, methods,computed, hook도 할수있다
  // import로 ref불러와야함
  // 데이터 생성하는법 : ref(데이터)이렇게 ref를 붙여줘야함, 나머지 자료형 넣는다
  // ref를 쓰는 이유는 실시간 반영을 하기위해서
  // 데이터는 ref()에 담고 return{}해야지 위에서 사용가능
  //최신에는 stript태그에 setup이렇게 하고나서 import하고 변수만들어서 사용도 가능
  // 데이터만들때 ref() / reactive() 사용
  // reative는 보통 array, object를 넣는다
  setup(props){
    //팔로워 검색기능
    let follower = ref([]);
    let followerOriginal = ref([]);  //원본을 저장해둘 state

    function search(serachWord){
      let newFollower = follower.value.filter((a)=>{
        return a.name.indexOf(serachWord) != -1
      });
      follower.value = [...newFollower]
    }

    let test = reactive({name:'kim'})
    test;

    //props사용법
    // let {어쩌구} = toRefs(props); & import해야함
    let {one} = toRefs(props);
    console.log(one.value);

    //watch 사용법 (변경이 될때마다 실행하고싶은 코드 작성)
    // watch(감시할거, ()=>{실행할코드}) & import해야함
    watch(one,()=>{

    })

    //computed사용법
    // computed( ()=>{return 연산결과})
    // 데이터는 .value를 써줘야함
    let 결과 = computed( ()=> {return follower.value.length})
    console.log(결과.value)

    //vuex store 사용법
    //useStore로 가져오기 & import 해야함
    let store = useStore();
    console.log(store.state.name);  //-> store.js에 name이라는 데이터를 출력함

    // import해야함
    //라이프사이클 훅을 사용하려면 on라이프사이클함수명(()=>{실행할코드})
    onMounted(()=>{
      //get요청으로 저장한 json 파일가져온다
      // .value 를 써야지 follower데이터를 수정할수있다
      axios.get('/follower.json').then((a) =>{
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      })
    })

    return {follower, search}
  },
  props:{
    one:Number,
  }
}
</script>

<style>

</style>