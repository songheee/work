const header = document.querySelector('header');
const nav = document.querySelector('nav');
const mainMenuList = document.querySelectorAll('.mainmenu > li');
const subMenu = document.querySelectorAll('.submenu');
const headerHeight = header.offsetHeight;
subMenuHeight = 0;

/* 
  let B = A.offsetHeight;  //border까지의 높이
  let C = A.clientHeight;  //padding까지의 높이
 */

/* nav에 마우스를 올리면 header높이가 270으로 
나가면 header의 높이가 50으로 변경 */

/* nav.addEventListener('mouseover', function () {
  header.style.height = '270px';
});
nav.addEventListener('mouseout', function () {
  header.style.height = '50px';
}); */

/* 변수명 subMenuHeight에 subMenu중에서 가장 높이가 큰 요소의 높이를 구해서 저장 */
//아래 반복문은 전체에서 가장 높이가 큰걸 구해오는 반복문
/* for (let i = 0; i < subMenu.length; i++){
  if (subMenu[i].offsetHeight > subMenuHeight) {
    subMenuHeight = subMenu[i].offsetHeight; 
  }
} */

/* mainMenuList에 마우스를 올리면 header의 높이를 headerHeight와 subMenuHeight를 더한 최종크기로 변경
mainMenuList에 마우스가 나가면 headerHeight로 변경
*/
//마우스를 올리면 전체서브메뉴가 한꺼번에 보이는 코드
/* for (let j = 0; j < mainMenuList.length; j++){
  mainMenuList[j].addEventListener('mouseover', function () {
    header.style.height = headerHeight + subMenuHeight + 'px';
  });
  mainMenuList[j].addEventListener('mouseout', function () {
    header.style.height = headerHeight + 'px';
  });
} */

//마우스를 올린 메뉴의 서브메뉴만 보이게하기
for (let j = 0; j < mainMenuList.length; j++){
  mainMenuList[j].addEventListener('mouseover', function () {
    /* 마우스가 올라가는 그 요소의 자식요소(ul)의 높이를 변수명
    subMenuHeight저장하고
    header의 높이를 headerHeight + subMenuHeight로 변경 */
    subMenuHeight = this.querySelector('ul').offsetHeight;
    header.style.height = headerHeight + subMenuHeight + 'px';
  });
  mainMenuList[j].addEventListener('mouseout', function () {
    header.style.height = headerHeight + 'px';
  });
}

