const tabLink = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const highLight = document.querySelector('.highlight');


tabLink.forEach(function (item, idx) {  //아래 이벤트가 일어난 인덱스의 번호는 idx이다 
  item.addEventListener('click', function (e) {
    e.preventDefault()
    showContent(idx);
    moveHighLight(idx);
  });
});

//클릭했을때 해당 인덱스 번호와 동일한 내용이 보이게 하는 함수
function showContent(num) {
  tabContent.forEach(function (item) {
    item.style.display = 'none';
  });
  tabContent[num].style.display = 'block';
}

//클릭했을때 메뉴의 하이라이트 움직이기
function moveHighLight(num) {
  const newLeft = tabLink[num].offsetLeft;
  const newWidth = tabLink[num].offsetWidth;

  highLight.style.left = newLeft + 'px';
  newLeft.style.width = `${newWidth}px`;   //->ecma 6버전 문법 
}


//아래껀 메뉴의 하이라이트만 움직이는거
/* //for(let i = 0; i < tabLink.length; i++) 아래처럼 바꿔서 쓸수있다
for(let link of tabLink){ //ecmaScript6 문법
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    let targetLeft = this.offsetLeft;

    highLight.style.left = targetLeft + 'px';
  });
}
 */
