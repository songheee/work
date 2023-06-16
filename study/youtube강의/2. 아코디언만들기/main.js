
const btnCollapse = document.querySelector('#btn-collapse'); //전부닫기
const heading = document.querySelectorAll('.panel-heading'); //제목
const question = document.querySelectorAll('.panel-question'); // 아코디언 wrapper
const answer = document.querySelectorAll('.panel-body'); //클릭하면 열리는 내용

//제목을 클릭하면 할일
function titleClick() {
  for (let i = 0; i < heading.length; i++){
    heading[i].addEventListener('click', function (e) {
      closeAll()
      /* for (let j = 0; j < question.length; j++){
        question[j].classList.remove('active');
      } */
      e.target.parentNode.classList.add('active');
    });
  }
}

//모두접기
function allClick() {
  btnCollapse.addEventListener('click', function () {
    closeAll()
    /* for (let j = 0; j < question.length; j++){
      question[j].classList.remove('active');
    } */
  });
}

//중복되는 코드 함수로 만들기
function closeAll() {
  for (let j = 0; j < question.length; j++){
    question[j].classList.remove('active');
  }
}


window.onload = function() {
  titleClick();
  allClick();
}




