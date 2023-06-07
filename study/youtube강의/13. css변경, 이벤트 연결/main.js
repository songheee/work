const menu1 = document.querySelectorAll('.menu1 li');
const menu2 = document.querySelectorAll('.menu2 li');
const menu3 = document.querySelectorAll('.menu3 li');
const menu4 = document.querySelectorAll('.menu4 li');
//반복문을 이용하여 리스트의 색상을 blue로 변경한다

//for
for (let i = 0; i < menu1.length; i++){
  menu1[i].style.color = 'blue';
  menu1[i].addEventListener('mouseover', function () {
    this.style.color = 'red';
  });
  menu1[i].addEventListener('mouseout', function () {
    this.style.color = 'blue';
  });
}

//for each
menu2.forEach(function (item, index) {
  // 아래 둘다 쓸수 있다
  // menu2[index].style.color = 'blue';
  item.style.color = 'blue';

  item.addEventListener('mouseover', function () {
    this.style.color = 'red';
  });
  item.addEventListener('mouseout', function () {
    this.style.color = 'blue';
  });
});

// for in (객체에서만 사용)  -> 그러니까 for of를 사용하자 
//let j;
for (let j of menu3) {
  j.style.color = 'blue';

  j.addEventListener('mouseover', function () {
    this.style.color = 'red';
  });
  j.addEventListener('mouseout', function () {
    this.style.color = 'blue';
  });
}

// do / while
let y = 0;
do {
  menu4[y].style.color = 'blue';
  menu4[y].addEventListener('mouseover', function () {
    this.style.color = 'red';
  });
  menu4[y].addEventListener('mouseout', function () {
    this.style.color = 'blue';
  });
  y++;
} while (y < menu4.length);  //조건 

