// a.getAttribute(b) = a요소의 b라는 속성의 값을 가져온다
// a.hasAttribute(b) = a요소가 b라는 속성이 있는지

/*  
let img = new Image();
img.src ="새로운값"
a.src = "b"  a요소의 src속성의 값을 b로 교체한다 

*/

const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showClass = 'bg-show';  // 클래스를 변수로 만들었음 

/* for (let i = 0; i < links.length; i++){
  이렇게 써야하는걸 아래처럼 쓸수도 있다 es6의 for문법
} */
for (const link of links) {
  //아래 코드가 없어도 작동하지만 있는 이유는 이미지들도 다 로드되어서 빠르게 나타날수있기때문
  const img = new Image();
  img.src = link.dataset.bg;  //getAttribute() 해서 가져올수도있다

  link.addEventListener('mouseenter', function () {
    bg.style.backgroundImage = `url(${this.dataset.bg})`;  //a태그가 가지고있는 그 주소의 이미지경로를 넣는다 
    document.body.classList.add(showClass);
  });
  link.addEventListener('mouseleave', function () {
    document.body.classList.remove(showClass);
  });
}



