const pagination = document.querySelector('.pagination');
let autoRun = setInterval(changeSlide, 5000);

//함수만들기
function changeSlide() {
  const radioButtons = [...document.querySelectorAll('.slide-radio')]; //배열로 만들어주기(nodeList를)
  const currentIndex = radioButtons.findIndex(rb => rb.checked);
  //rb는 radioButtons 배열의 하나하나 element
  //findIndex를 쓰면 html에 data-number="1"이렇게 안만들고 가져올수있다
  

  //radioButtons[2].checked = ture 로 해줘야하는데 []안의 숫자가 계속 커지면 안되니까
  // 0 % 4 = 1, 2 % 4 = 2, 3 % 4 = 3, 4 %4 = 0
  radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
}
pagination.addEventListener('mouseenter', () => clearInterval(autoRun));
pagination.addEventListener('mouseleave', () => autoRun = setInterval(changeSlide, 5000));

