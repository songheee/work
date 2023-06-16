//ecma 2016 const let ` =>    사용

const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');
const colors = ['deepskyblue', 'orange', 'black', 'green', 'gold', 'magenta', 'darkblue'];

//링크 색상 바꾸기
for (let i = 0; i < links.length; i++){
  /* links[i].addEventListener('click', function (e) {
    e.preventDefault();
  }) */
  /* links[i].addEventListener('click', (e) => {
    e.preventDefault();
  }) */
  links[i].addEventListener('mouseenter', mouseenterFunc);  //함수로 만들기 
}

function mouseenterFunc() {
  if(!this.parentNode.classList.contains('active')){   //this는 마우스가 올라간애
    for (let i = 0; i < links.length; i++){
      if (links[i].parentNode.classList.contains('active')) {
        links[i].parentNode.classList.remove('active');
      }
      links[i].style.opacity = '0.25';
    }//마우스가 올라가지 않은 다른 메뉴들 마다 할일

    //마우스가 올라간 메뉴의 활성화 
    this.parentNode.classList.add('active');
    this.style.opacity = '1';

    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left + window.pageXOffset;
    const top = this.getBoundingClientRect().top + window.pageYOffset;
    const color = colors[Math.floor(Math.random() * links.length)]; //컬러 배열을 랜덤으로 넣어준다

    //target.style.width = width + 'px';  구버전 문법
    target.style.width = `${width}px`; //es 6버전
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
  }
}//mouseenterFunc


// 창의 사이즈가 바뀌면
function resizeFunc() {
  const active = document.querySelector('.mynav li.active');

  if (active) {  //active가 있으면 할일
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset;

    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
  }
}

window.addEventListener('resize', resizeFunc);