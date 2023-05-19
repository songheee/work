/* text.js */
// span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
// 화면에 표시할 문장 배열
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
// 배열의 인덱스 초깃값
let index = 0;
// 화면에 표시할 문장 배열에서 텍스트를 하나 가져온 뒤, 배열로 만들기
let currentTxt = txtArr[index].split("");  //split은 텍스트하나하나를 배열로 만들기 

function writeTxt(){ // ①
  spanEl.textContent  += currentTxt.shift();    //textContent는 텍스트를 추가한다는 뜻 / shift는 첫번째 배열을 추출
  if(currentTxt.length !== 0){ // ②
     setTimeout(writeTxt, Math.floor(Math.random() * 100));  //math.floor는 랜덤으로 초가 변경되는거
  }else{ // ③ 뒤에서부터 지워져야하니까
    currentTxt = spanEl.textContent.split("");  //빈배열이엿던걸 다시 채워줌
    setTimeout(deleteTxt, 3000);
  }
}

function deleteTxt(){
  currentTxt.pop(); // ① pop 맨뒤에 텍스트를 제거한게 담김 (r이 제거되있는상태)
  spanEl.textContent = currentTxt.join(""); // ②  join 합치기 (하나의 문자열로 합쳐짐) (r을 제거하여 문자배열을 하나로 합친상태)
  if(currentTxt.length !== 0){ // ③
    setTimeout(deleteTxt, Math.floor(Math.random() * 100))
  }else{ // ④
    index = (index + 1) % txtArr.length;  //index의 길이만큼 나머지연산자구하기
    currentTxt = txtArr[index].split(""); //추가된 index의 값을 배열로 만들기
    writeTxt();
  }
}

writeTxt();
/* End text.js */


/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);  // requestAnimationFrame는 웹브라우저가 감당할수있을만큼만 실행한다 
});
function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;  // scrollY메소드가 안먹을수도 있으니까 pageYOffset도 써준다
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}
