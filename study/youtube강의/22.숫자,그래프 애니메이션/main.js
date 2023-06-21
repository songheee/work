let progressWrap = document.querySelector('.progress_wrap'),
  progressBar = progressWrap.querySelector('.bar'),
  progressRate = progressWrap.querySelector('span'),
  initialRate = 0,
  targetRate = progressWrap.getAttribute('data-num');


/* 
  일정시간마다 할일 
  let timer = setInterval(할일, 시간);  clearInterval(timer)
  할일 = 함수 = function(){...}
  시간 1000 = 1s, 20
*/


let numAnimation = setInterval(function () { 
  initialRate++;
  if (initialRate == targetRate) {
    clearInterval(numAnimation);
  }
  progressBar.style.width = `${initialRate}%`;
  progressRate.innerText = `${initialRate}%`;
}, 20);








