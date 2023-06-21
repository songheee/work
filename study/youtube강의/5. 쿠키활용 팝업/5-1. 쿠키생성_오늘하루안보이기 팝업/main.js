let myPopup = document.querySelector('.popup');
let checkbox = document.querySelector('#popup');
let popupClose = document.querySelector('.close');

//쿠키생성
function setCookie(name, value, day){
  let date = new Date(); //현재 날짜 지정
  date.setDate(date.getDate + day);  //쿠키생성

  let mycookie = '';
  mycookie += name + '=' + value + ';';
  mycookie += 'expires=' + date.toUTCString();

  document.cookie = mycookie; //쿠키 설정, 생성
}
//setCookie('abc.com', 'main', 3);  -> 쿠키생성은 사용자가 체크버튼의 여부에 따라서 닫기를 클릭했을때 생성

//쿠키삭제
function removeCooke(name) {
  let date = new Date();

  date.setDate(date.getDate() - 1); //쿠키생성 날짜를 뒤로 돌리기
  let setCookie = '';
  setCookie += name + '=Main;';
  setCookie += 'expires =' + date.toUTCString();

  document.cookie = setCookie;
}


//쿠키확인
function checkCookie(name){
  let cookies = document.cookie.split(';');  //->쿠키를 배열로 만듬 ;을 구분해서
  console.log(cookies);
  let visited = false //방문여부 - 거짓

  // (let i =0; i <cookies.lenght; i++) 와 같다
  for(let i in cookies){
    if(cookies[i].indexOf(name) > -1){   //원하는 문자열 파악할때 indexOf or search 를 쓴다
      visited = true;
      console.log(visited);
    }
  }
  console.log(visited);

  
  if (visited) { //visited가 ture면 할일
    //재방문 true
    myPopup.style.display = 'none';
  } else {
    //신규방문 false
    myPopup.style.display = 'block';
  }
}
checkCookie('abc.com');


popupClose.addEventListener('click', function () {
  //checkbox 의 체크여부 -> a.checked true false
  if (checkbox.checked) {
    //팝업을 다시 안보겠다. 팝업닫고, 쿠키생성
    setCookie('abc.com', 'main', 1);
    myPopup.style.display = 'none';

  } else {
    //팝업 계속본다. 팝업닫고, 쿠키제거
    myPopup.style.display = 'none';
    removeCooke(abc.com);
  }
});
