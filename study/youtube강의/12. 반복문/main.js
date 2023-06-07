var fruits = ["apple", "orange", "cherry"];

// for 
for (let i = 0; i < fruits.length; i++){
  document.getElementById('for').innerHTML += '<li>'+ fruits[i]+'</li>';
}

// for each
fruits.forEach(function (item, index) {
  document.getElementById('foreach').innerHTML += '<li>' + item + '</li>';
  //document.getElementById('foreach').innerHTML += '<li>'+ fruits[index] +'</li>'; 
  // item이던 index던 불러올수 있다
});

// for of
let item;
for (item of fruits) {
  document.getElementById('forof').innerHTML += '<li>'+ item +'</li>';
}

//for in ->객체내의 값들마다 할일 (객체내에서만 쓴다) 객체 = 변수(property) + 함수(method)
const person = { pname: '홍길동', page: '200', pgender: '남성' }; // -> 객체
let x;
for (x in person) {
  document.getElementById('forin').innerHTML += '<li>'+ x + ':' + person[x] +'</li>';
}

//do / while  (일단해 while안의 내용이 참일때까지)
let y = 0;
do {
  document.getElementById('dowhile').innerHTML += '<li>' + fruits[y] + '</li>';
  y++;
}
while (y < fruits.length);
