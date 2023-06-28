const rowPerPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowPerPage);
//페이지네이션을 몇개 보여줄껀지를 작성하고 총 테이블의 갯수도 몇개보여줄껀지 계산하는식
//100/10 10 -> 10개의 페이지네이션이 필요 , 혹시 나머지값도 보여주려면 무조건
//값을 올리는건 ceil을써서 사용

const numbers = document.querySelector('#numbers');

// 화살표 생성
const prevPageBtn = document.querySelector('.pagination .fa-arrow-left');
const nextPageBtn = document.querySelector('.pagination .fa-arrow-right');
let pageActiveIdx = 0; //현재 보고있는 페이지 묶음번호
let currentPageNum = 0; //현재 보고 있는 페이지네이션 번호
let maxPageNum = 3 //페이지 그룹 최대 개수

//페이지네이션 생성
for (let i = 1; i <= pageCount; i++){
  //numbers.innerHTML = numbers.innerHTML + `<li><a href="">${i}</a></li>`;
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
};
const numberBtn = numbers.querySelectorAll('a');

numberBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    displayRow(idx);
  });
});


function displayRow(idx) {
  //테이블 몇개보여줄껀지
  let start = idx * rowPerPage;
  let end = start + rowPerPage;
  
  //배열로 만들기
  let rowsArray = [...rows];

  //일단 다 안보여주기
  for (ra of rowsArray) {
    ra.style.display = 'none';
  }

  let newRows = rowsArray.slice(start, end);
  for (nr of newRows) {
    nr.style.display = '';
  }

  for (nb of numberBtn) {
    nb.classList.remove('active');
  }
  numberBtn[idx].classList.add('active');
}
//인덱스가 0일때 보여줘야할 화면
displayRow(0);


//페이지네이션 그룹 표시 함수
function displayPage(num) {
  //페이지네이션을 번호 감추기
  for (pg of numberBtn) {
    pg.style.display = 'none';
  }
  let totalPageCount = Math.ceil(pageCount / maxPageNum);  //페이지 그룹 몇개인지
  let pageArr = [...numberBtn];
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);

  for (let item of pageListArr) {
    item.style.display = 'block';
  }
  if (pageActiveIdx == 0) {
    prevPageBtn.style.display = 'none';
  } else {
    prevPageBtn.style.display = 'block';
  }
  if (pageActiveIdx == totalPageCount -1) {
    nextPageBtn.style.display = 'none';
  } else {
    nextPageBtn.style.display = 'block';
  }
}
displayPage(0);

//다음 화살표 눌렀을때 작동 
nextPageBtn.addEventListener('click', () => {
  let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
  displayRow(nextPageNum);
  ++pageActiveIdx;
  displayPage(pageActiveIdx);
});

//이전 화살표 눌렀을때 작동 
prevPageBtn.addEventListener('click', () => {
  let nextPageNum = pageActiveIdx * maxPageNum - maxPageNum;
  displayRow(nextPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
});