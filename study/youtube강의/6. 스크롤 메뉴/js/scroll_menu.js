$(function(){
  //변수지정
  const menu = document.querySelectorAll('#top_menu ul li');
  const contents = document.querySelectorAll('#contents > section');
  let lastPos = 0;
  
  //메뉴 클릭 이동
  for (let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', function (e) {
      e.preventDefault();
      //자바스크립트로는 클릭한 요소의 인덱스번호를 가져오는 코드가 길기 때문에 html에 date-num이라는 데이터로 인덱스번호를 넣어둔다 
      let idx = this.getAttribute('data-num'); /* 클릭한 요소의 번호를 가져온다 */
      let tt = contents[idx].offsetTop; /* section의 인덱스번호의 높이값을 가져온다 */

      //window.scroll(0, tt); /* 윈도우 스크롤양 만들기 (x, y) 해당위치로 이동 */
      //window.scrollTo(0, tt); /* 해당위치로 이동 */
      //contents[idx].scrollIntoView(); /* 대상위치로 이동 */

      //일정시간마다 스크롤양을 변동시켜서 위치로 이동
      const scrollInterval = setInterval(function () {
        if(tt - window.pageYOffset > 50 || window.pageYOffset - tt > 50) {
          if(tt > lastPos) {
            window.scrollBy(0, 55);
          } else {
            window.scrollBy(0, -55);
          }
        } else {
          clearInterval(scrollInterval);
          window.scrollTo(0, tt);
          lastPos = tt; //사용자가 보고싶어하는 화면의 높이는tt에 저장되어있으니까 
        }
      }, 15);
    })
  } //for문

  //스크롤이 생기면 메뉴 활성화 클래스 넣기
  window.addEventListener('scroll', function () {
    let sct = this.pageYOffset;
    for (let i = 0; i < contents.length; i++){
      if(contents[i].offsetTop <= sct) {   //contents[i].offsetTop보다 사용자가 스크롤을 많이 하면
        let idx = contents[i].getAttribute('data-num');
        //모든 메뉴에 on 제거하고, 인텍스번호에 해당하는 메뉴에만 on 추가
        for (let a = 0; a < menu.length; a++){
          menu[a].classList.remove('on');
        }
        menu[idx].classList.add('on');
      }
    }
  });


  

});