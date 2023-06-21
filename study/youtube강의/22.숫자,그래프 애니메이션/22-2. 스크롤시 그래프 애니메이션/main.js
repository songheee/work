let progressWrap = document.querySelector('.progress_wrap'),
  triggerPoint = progressWrap.offsetTop - 400;  //화면에서 떨어진 거리
  progressBar = progressWrap.querySelector('.bar'),
  progressRate = progressWrap.querySelector('span'),
  initialRate = 0,
  numAnimation = null,  
  targetRate = parseInt(progressWrap.getAttribute('data-num')); //문자를 숫자로 받아온다


window.addEventListener('scroll', function () {
  let scrollAmt = this.pageYOffset;
  if (scrollAmt > triggerPoint) {
    startNumberAnimation();
  }
});

function startNumberAnimation() {
  if (numAnimation == null) {
    numAnimation = setInterval(function () { 
      initialRate++;
      if (initialRate == targetRate) {
        clearInterval(numAnimation);
      }
      progressBar.style.width = `${initialRate}%`;
      progressRate.innerText = `${initialRate}%`;
    }, 20);
  }
}










