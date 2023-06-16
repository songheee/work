/* const numAnimation = document.querySelector('.num_animation');
let num = 0;
const targetNum = numAnimation.getAttribute('data-rate');

//한개일때
const timer = setInterval(function () {
  ++num;
  numAnimation.innerText = num;
  if (num == targetNum) {
    clearInterval(timer);
  }
}, 10); */


//반복문
const numAnimation = document.querySelectorAll('.num_animation');

function changeNum(idx) {
  let num = 0;
  let interValTime = 10;
  let targetNum = numAnimation[idx].getAttribute('data-rate');
  if (targetNum > 500) {  
    interValTime = 2;  // 속도변경 
  }
  const timer = setInterval(function () {
    ++num;
    numAnimation[idx].innerText = num;
    if (num == targetNum) {
      clearInterval(timer);
    }
  }, interValTime);
}

for (let i = 0; i < numAnimation.length; i++){
  changeNum(i);
}


