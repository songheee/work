
const mainHeader = document.querySelector('#main-header');
const defaultLogo = 'images/logo.svg';
const threshold = mainHeader.offsetHeight;
const logo = document.querySelector('#logo');
const smallLogo = 'images/logo-shrink.svg';

/* 윈도우 스크롤이 threshold보다 많으면 mainHeader에 shrink클래스 추가, 제거 */
window.addEventListener('scroll', function () {
  if(this.pageYOffset > threshold) {
    if(!mainHeader.classList.contains('shrink')) {
      mainHeader.classList.add('shrink');
      switchImg(smallLogo);
    }
  } else {
    if(mainHeader.classList.contains('shrink')) {
      mainHeader.classList.remove('shrink');
      switchImg(defaultLogo);
    }
  }
});

/* 현재 이미지는 지우고, 매개변수의 이미지 주소로 logo의 src속성을 변경, logo 의 클래스 지우기 */
function switchImg(newImgPath) {
  logo.classList.add('hied');
  setTimeout(function () {
    logo.setAttribute('src', newImgPath);
    logo.classList.remove('hide');
  }, 300);
}



