import { createStore } from "vuex";
import instar from './assets/instargram.js';
import axios from 'axios'

const store = createStore({
  state(){
    return{
      name: 'kim',
      age: 20,
      likeClick : instar,
      more:{},  //서버에서 더보기 게시물을 가져와서 여기에 저장
      count:0,
    }
  },

  //state수정방법 정의하는곳
  mutations:{
    nameChange(state){  //파라미터를 추가하면 위에있는 오브젝트를 의미한다
      state.name= 'park'
    },
    ageChange(state, data){  //data에는 app.vue에서 보낸 10이 들어간다
      state.age += data
    },
    likeChange(state, data){  //사진 클릭시 좋아요갯수 변경
      if(state.likeClick[data].liked == false){
        state.likeClick[data].likes++;
        state.likeClick[data].liked = true;
      }else{
        state.likeClick[data].likes--;
        state.likeClick[data].liked = false;
      }
    },
    //actions후에 state변경은 여기서 또 작성해줘야함
    setMore(state, data){
      state.more = data
    },
    addPost(state){
      state.likeClick.push(state.more);
    },
    increPost(state) {
      if(state.count < 1) {
          state.count++
      }else {
          state.count = 0;
      }
    },
  },
  //ajax요청 또는 오래걸리는 작업들(서버에서데이터를 받아와서 뭔가작업할때)
  // actions에서 작업하고나서 state를 변경할때는 위에 mutations에서 또 작업진행해줘야함
  // context = store의 data를 의미하는 파라미터명
  actions:{
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more${context.state.count}.json`)
      .then((a) =>{
        // console.log(a.context);
        context.commit('setMore', a.data);
        //인스타 내용물을 계속해서 추가
        context.commit('addPost');
        context.commit('increPost');
      })
    },
  }


})

export default store;