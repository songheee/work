
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');
let currentIdx = 0;
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

makeClone();

function makeClone() {
  //복사본 뒤에 추가하기
  for (let i = 0; i < slideCount; i++){
    //a.cloneNode() -> a를 복사 , a.cloneNode(true) -> a의 자식까지 복사
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    //a.appendChild(b) -> a뒤에 b를 추가한다
    slides.appendChild(cloneSlide);
  }
  //복사본 앞에 추가하기
  for (let j = slideCount - 1; j >= 0; j--){
    let cloneSlide = slide[j].cloneNode(true);
    cloneSlide.classList.add('clone');
    //a.prepend(b) -> a앞에 b를 추가한다
    slides.prepend(cloneSlide);
  }
  undateWidth();
  setInitialPos();
  // 슬라이드가 -1150px로 변하는 과정을 보여주지 않기위해 setTimeout을 사용함 (첫슬라이드 배치의 움직임을 안보여주기 )
  setTimeout(function () {
    slides.classList.add('animated');
  }, 100);
}
// 슬라이드들을 감싸는 ul의 총 너비 구하기
function undateWidth() {
  const currentSlides = document.querySelectorAll('.slides li');
  const newSlideCount = currentSlides.length;
  const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}

// 슬라이드의 기본 position잡기 (슬라이드의 기본을 중간에서 시작하게 위치 변경해주는함수)
function setInitialPos() {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = 'translateX(' + initialTranslateValue + 'px )';
}

nextBtn.addEventListener('click', function () {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener('click', function () {
  moveSlide(currentIdx - 1);
});

// 슬라이드가 이동할수있게 left값을 변경
function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  console.log(currentIdx, slideCount);

  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    }, 500);
    setTimeout(function () {
      slides.classList.add('animated');
    }, 600);
  }
}

//자동슬라이드
let timer = undefined;  //clearInterval할때 숫자로 바뀔수있기 때문에 작성해줌
// 마우스올리면 자동슬라이드, 마우스 나가면 슬라이드 멈춤
function autoSlide() {
  if (timer == undefined) {
    timer = setInterval(function () {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
}
autoSlide();

function stopSlide() {
  clearInterval(timer);
  timer = undefined;
}
slides.addEventListener('mouseenter', function () {
  stopSlide()
});
slides.addEventListener('mouseleave', function () {
  autoSlide();
});


