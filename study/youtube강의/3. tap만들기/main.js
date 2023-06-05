/*
순수 자바스크립트(vanila script)를 이용하여
menu를 클릭하면 그에 맞는 내용이 보이도록(display block) script를 작성하시오.
페이지가 열리자마자는 menu1과 그에 맞는 내용이 나타나도록 작성하시오.
*/
const targetLink = document.querySelectorAll('.tab-menu li a');
const tabContent = document.querySelectorAll('#tab-content div');

function tabList() {
  for (let i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click', function (e) {
      e.preventDefault();
      let orgTarget = e.target.getAttribute('href');
      const tabTarget = orgTarget.replace('#',''); //a.replace('b','c'); a안에 b라는 값을 c로 바꿀수있다
      
      // 내용을 안보이게하기
      for (let j = 0; j < tabContent.length; j++){
        tabContent[j].classList.remove('block');
      }
      document.getElementById(tabTarget).classList.add('block');
      
      // a태그에 활성화 하기
      for (let x = 0; x < targetLink.length; x++){
        targetLink[x].classList.remove('active');
        e.target.classList.add('active');
      }
    });
  }
}
window.onload = function () {
  tabList();
}






/* const orgTarget = '#tabs-1';  
const tabTarget = orgTarget.replace('#',''); //a.replace('b','c'); a안에 b라는 값을 c로 바꿀수있다

document.getElementById(tabTarget).classList.add('active'); */