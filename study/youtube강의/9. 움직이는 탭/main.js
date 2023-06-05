const tabLink = document.querySelectorAll('.tab-menu li');
const highLight = document.querySelector('.highlight');

//for(let i = 0; i < tabLink.length; i++) 아래처럼 바꿔서 쓸수있다
for(let link of tabLink){ //ecmaScript6 문법
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    let targetLeft = this.offsetLeft;

    highLight.style.left = targetLeft + 'px';
  });
}

