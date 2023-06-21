/* es5 */
var menu = document.querySelectorAll('ul li');

/* menu.forEach(function (item, idx) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var title = this.getAttribute('data-title');
    alert(idx + '번째를' + title + '클릭했어요');
  })
}); */

/* es6 */
menu.forEach((item, idx)=> {
  item.addEventListener('click', (e)=> {
    e.preventDefault();
    //console.log(e.target);  -> <a href="">list item1</a> 가 나옴 (제일 작은게 나옴)
    console.log(e.currentTarget); //-> li태그가 나옴
    var title = e.currentTarget.getAttribute('data-title');  //화살표 함수는 this를 못받아옴
    alert(idx + '번째를' + title + '클릭했어요');
  })
});
