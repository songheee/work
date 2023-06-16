const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItems = document.querySelectorAll('.image-list li');
const active = 'active';   /* -> 이렇게 적인게 클래스를 변수로 잡은거  */
const listView = 'list-view';
const gridView = 'grid-view';
const dNoe = 'd-none';

/* 버튼 활성화 */
for (const btn of btns) {  //배열인 btns 의하나하나를 btn으로 지정
  btn.addEventListener('click', (e) => {
    const parent = e.currentTarget.parentElement;
    //-> 클릭한것의 부모요소 선택 
    // e.target이 아니라 currentTarget을 써야함 이벤트 리스너의 요소를 선택해야하므로 (화살표함수라서 this사용불가)
    document.querySelector('.view-options .active').classList.remove(active);
    parent.classList.add(active);

    if (parent.classList.contains('show-list')) {
      parent.previousElementSibling.previousElementSibling.classList.add(dNoe);
      imageList.classList.remove(gridView);
      imageList.classList.add(listView);
    } else {
      parent.previousElementSibling.classList.remove(dNoe);  //previousElementSibling 이전형제요소
      imageList.classList.remove(listView);
      imageList.classList.add(gridView);
    }
  })
}

/* 리스트 너비 조절 range 스크립트 */
const rangeInput = document.querySelector('input[type="range"]');

rangeInput.addEventListener('input', (e) => {  //input의 값이 바뀌면 할일
  //css의 root의 속성바꾸기
  //documentElement는 html태그 자체를 선택
  document.documentElement.style.setProperty('--minRangeValue', `${e.target.value}px`);
  //선택자.style.css속성명 = 값
  //선택자.style.backgroundColor = 'blue';  == 선택자.style.setProperty('backgroundColor', 'blue');

});

/* input type="search"의 값이 바뀌면 할일, 검색키워드로 필터 적용 */
const captions = document.querySelectorAll('.image-list figcaption p:first-child');
const myArray = [];
let counter = 1;

for (const caption of captions) {
  myArray.push({
    id: counter++,  //index번호
    text: caption.textContent
  })
}
//console.log(myArray);

const searchInput = document.querySelector('input[type="search"]');
const photosCounter = document.querySelector('.toolbar .counter span');

searchInput.addEventListener('keyup', keyupHandler);

function keyupHandler() {
  for (const item of imageListItems) {
    item.classList.add(dNoe);
  }
  const keyword = this.value;  //사용자가 입력한 키워드
  const filteredArray = myArray.filter(el => el.text.toLowerCase().includes(keyword.toLowerCase()));
  //el은 배열내용의 하나하나의 요소
  //배열의 요소에 사용자가 작성한 키워드 값이 include되어있는지 확인
  //toLowerCase() 소문자로 바꿔주는거 ( 대문자로 썼어도 소문자로 변경해줌)
  //console.log(filteredArray);

  if (filteredArray.length > 0) {
    for (const el of filteredArray) {
      document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNoe);
    }
  }
  photosCounter.textContent = filteredArray.length;
}