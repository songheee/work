document.addEventListener('DOMContentLoaded', function(){ 
  
  // 변수 지정
  var slideWrap = document.querySelector('.container'),
    slideContainer = document.querySelector('.slider-container'),
    slide = document.querySelectorAll('.slide'),
    navPrev = document.getElementById('prev'),
    slideHeight = 0,
    slideCount = slide.length,
    currentIndex = 0,
    pager = document.querySelector('.pager'),
    //pagerBtn = document.querySelectorAll('.pager span'),
    pagerHTML = '',
    navNext = document.getElementById('next'),
    timer = undefined;

                  
      //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
      for(var i = 0; i < slideCount ; i++){
          if(slideHeight < slide[i].offsetHeight){
              slideHeight = slide[i].offsetHeight;
          }
      }
      console.log(slideHeight);

      slideWrap.style.height = slideHeight +'px';
      slideContainer.style.height = slideHeight +'px';

      // 슬라이드가 있으면 가로로 배열하기
      for(var a = 0; a < slideCount; a++){
        slide[a].style.left = a * 100 + '%'; 
        // pagination을 슬라이드가 생성될때마다 만들어주기
        pagerHTML += '<span data-idx="' + a + '">' + (a + 1) + '</span>';
        pager.innerHTML = pagerHTML;

      }
      let pagerBtn = document.querySelectorAll('.pager span');
      

      // 슬라이드 이동 함수 
      function goToSlide(idx){
        slideContainer.classList.add('animated');
        slideContainer.style.left = -100 * idx + '%';
        currentIndex = idx;         
        //클릭된 요소에만 active 추가
        for (let b = 0; b < pagerBtn.length; b++){
          pagerBtn[b].classList.remove('active');
        }
        pagerBtn[idx].classList.add('active');
      }
      //시작하자마자 0번째를 보여줘라
      goToSlide(0);

      // 버튼을 클릭하면 슬라이드 이동시키기
      navPrev.addEventListener('click',function(){            
          //goToSlide(currentIndex - 1);

          if(currentIndex == 0){
              //navPrev.classList.add('disabled');
              goToSlide(slideCount - 1);
          }else{
              //navPrev.classList.remove('disabled');
              goToSlide(currentIndex - 1);
          } 
      });

      navNext.addEventListener('click',function(){
          //goToSlide(currentIndex + 1);

          if(currentIndex == slideCount - 1){
              // navNext.classList.add('disabled');
              goToSlide(0);
          }else{
              // navNext.classList.remove('disabled');
              goToSlide(currentIndex + 1);
          }
      });

  //자동 슬라이드
  //4초마다 goToSlide(숫자);
  //setinterval(할일, 4000);
  //함수 = 할일 = function(){실제할일}
  //실제할일 = goToSlide(숫자)

  //함수로 만들기
  function startAutoSlide() {
    timer = setInterval(function () {
    let nextIdx = (currentIndex + 1) % slideCount; //나눈 나머지
      goToSlide(nextIdx);
    }, 4000);
  }
  startAutoSlide();

  //멈추는 함수
  function stopAutoSlide() {
    clearInterval(timer);
  };

  //slideWrap 마우스가 들어오면 할일, 나가면 할일
  slideWrap.addEventListener('mouseenter', stopAutoSlide);
  /* 
  이렇게쓴걸 위에처럼 축약해서 사용
  slideWrap.addEventListener('mouseenter', function () {
    stopAutoSlide();
  }); */
  slideWrap.addEventListener('mouseleave', startAutoSlide);

  //pager로 슬라이드 이동하기
  for (let x = 0; x < pagerBtn.length; x++){
    pagerBtn[x].addEventListener('click', function (e) {
      console.log(e.target.innerText);

      //let pagerNum = this.getAttribute('data-idx');  //this라고 해도되고 e.target이라고 해도댐 
      /* 위에 쓴거랑 똑같은데 data로 값 가져오는거 말고 컨텐츠에 적은 숫자로 가져오는데 
      인덱스 번호가 1부터니까 -1를 해줌 */
      let pagerNum = this.innerText - 1;  
      goToSlide(pagerNum);
    });
  }

});//DOMcontentloaded




