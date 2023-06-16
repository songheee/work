window.addEventListener('load', createChart);
window.addEventListener('resize', createChart);

function createChart(e) {
  const days = document.querySelectorAll('.chart-values li');  //->nodelist라고 되어있는걸 array로 바꿔야 반복문쓸때 좋음 
  const tasks = document.querySelectorAll('.cart-bars li');
  const daysArray = [...days] // -> 배열만들기

  //배열로 바꾸기
  //Array.from(days);

  tasks.forEach(el => {  //각각의 li들은 el의 변수명으로 지정되서 들어왓다
    //변수지정
    const duration = el.dataset.duration.split('-');
    const startDay = duration[0];
    const endDay = duration[1];
    let left = 0;
    let width = 0;
    
    //바의 left 확인하기
    if (startDay.endsWith('½')) {   //1/2로 시작하면할일
      const filterdArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
      left = filterdArray[0].offsetLeft + filterdArray[0].offsetWidth / 2;
    } else {
      //1/2로 시작 안하면 할일 
      const filterdArray = daysArray.filter(day => day.textContent == startDay);
      left = filterdArray[0].offsetLeft;
    }
    //바의 width확인
    if (endDay.endsWith('½')) {
      const filterdArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
      width = filterdArray[0].offsetLeft + filterdArray[0].offsetWidth / 2 - left;
    } else {
      const filterdArray = daysArray.filter(day => day.textContent == endDay);
      width = filterdArray[0].offsetLeft + filterdArray[0].offsetWidth - left;
    }

    //left와 width li css 지정
    el.style.left = `${left}px`;
    el.style.width = `${width}px`;
    if (e.type == 'load') {
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    }
  })//forEach


}
