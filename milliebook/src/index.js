import './style.css';


// 할 일 객체 생성자 함수
class Task {
  constructor(description, time, timerToDoList) {
    this.description = description;
    this.initialTime = time; // 기존에 입력한 값 유지
    this.time = time;
    this.timerId = null;
    this.timerToDoList = timerToDoList; // TimerToDoList 인스턴스 전달받기
  }
   // 할 일이 완료되었을 때 처리하는 함수
  completeTask() {
    clearTimeout(this.timerId);
    this.timerToDoList.moveCompletedTask(this);
    this.timerToDoList.showCompletionPopup(this.description);
  }
  checkTimer() {
    if (this.time <= 0) {
      this.completeTask();
    }
  }
}

const entryOrderBtn = document.querySelector('.entry-order');
entryOrderBtn.addEventListener('click', () => {
  timerToDoList.toggleSortType('entry');
});

const timeOrderBtn = document.querySelector('.time-order');
timeOrderBtn.addEventListener('click', () => {
  timerToDoList.toggleSortType('time');
});
  
// 타이머 To-Do List 애플리케이션 객체
class TimerToDoList {
  constructor() {
    this.tasks = [];
    this.sortType = 'entry'; // 'entry' 또는 'time'
  }

  // 할 일 추가 함수
  addTask(description, time) {
    const newTask = new Task(description, time, this); // 인스턴스 전달
    newTask.originalTime = time;
    this.tasks.push(newTask);
    this.sortTasks();
  }

  // 할 일 삭제 함수
  deleteTask(index) {
    clearTimeout(this.tasks[index].timerId);
    this.tasks.splice(index, 1);
  }

  // 할 일 타이머 시작 함수
  startTimer(index) {
    const task = this.tasks[index];
    task.timerId = setInterval(() => {
      if (task.time <= 0) {
        clearInterval(task.timerId);
        task.checkTimer();
        this.renderTasks();

        if (task.time === 0) {
          this.showCompletionPopup(task.description);
        }
      } else {
        task.time--;
        task.checkTimer();
        this.renderTasks();
      }
    }, 1000);
  }

    sortTasks() {
    if (this.sortType === 'entry') {
      this.tasks.sort((a, b) => a.description.localeCompare(b.description));
    } else if (this.sortType === 'time') {
      this.tasks.sort((a, b) => a.time - b.time);
    }
  }

  toggleSortType(type) {
    this.sortType = type;
    this.sortTasks();
    this.renderTasks();
  }


// 할 일 목록 렌더링 함수
renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  this.sortTasks(); // 할 일 목록 정렬
  
  for (const task of this.tasks) {
    let todoItemElem = taskList.querySelector(`.todo-item[data-description="${task.description}"]`);
    
    if (!todoItemElem) {
      todoItemElem = document.createElement('li');
      todoItemElem.classList.add('todo-item');
      todoItemElem.dataset.description = task.description;

      const checkboxElem = document.createElement('input');
      checkboxElem.type = 'checkbox';
      checkboxElem.classList.add('checkbox');
      checkboxElem.checked = task.time <= 0;
      checkboxElem.addEventListener('change', () => {
        completeSelectedBtn.classList.toggle('disabled', !checkboxElem.checked);
        task.time = checkboxElem.checked ? 0 : task.originalTime;
        this.renderTasks();
      });

      const listItem = document.createElement('div');
      listItem.classList.add('todo');
      listItem.textContent = task.description;

      const todoElem2 = document.createElement('div');
      todoElem2.classList.add('todo2');
      todoElem2.textContent = `${task.time}초`;

      const delBtnElem = document.createElement('button');
      delBtnElem.classList.add('delBtn');
      delBtnElem.innerHTML = '종료';

      delBtnElem.addEventListener('click', () => {
        const taskItemElem = delBtnElem.parentElement;
        const description = taskItemElem.dataset.description;
        const task = timerToDoList.tasks.find((task) => task.description === description);
        task.completeTask();
        taskList.removeChild(taskItemElem);
      });

      if (task.time <= 0) {
        todoItemElem.classList.add('checked');
      } else if (task.time <= 5) { // 남은 시간이 5초 이내인 경우
        todoItemElem.classList.add('near-end'); // 추가한 클래스 이름으로 스타일 적용
      }

      todoItemElem.appendChild(checkboxElem);
      todoItemElem.appendChild(listItem);
      todoItemElem.appendChild(todoElem2);
      todoItemElem.appendChild(delBtnElem);

      taskList.appendChild(todoItemElem);
    } else {
      const todoElem2 = todoItemElem.querySelector('.todo2');
      todoElem2.dataset.time = task.time; 
      todoElem2.textContent = `${task.time}초`;
    }
  }

    const entryOrderBtn = document.querySelector('.entry-order');
    const timeOrderBtn = document.querySelector('.time-order');

    entryOrderBtn.classList.toggle('active', this.sortType === 'entry');
    timeOrderBtn.classList.toggle('active', this.sortType === 'time');
  }

     // 팝업창 표시 함수
  showCompletionPopup(description) {
    const popup = document.getElementById('completionPopup');
    const completionTaskDescription = popup.querySelector('#completionTaskDescription');
    const confirmButton = popup.querySelector('#completionConfirmButton');

    completionTaskDescription.textContent = description;

    popup.style.display = 'block';

    confirmButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }

  moveCompletedTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);

      // Move completed task to "종료된 할 일"
      const completedTaskList = document.getElementById('completedTaskList');
      const todoItemElem = document.createElement('li');
      todoItemElem.classList.add('todo-item');
      
      const listItem = document.createElement('div');
      listItem.classList.add('todo');
      listItem.textContent = `${task.description}`;

      const todoElem2 = document.createElement('div');
      todoElem2.classList.add('todo2');
      todoElem2.textContent = `${task.initialTime}초`;
      
      completedTaskList.appendChild(todoItemElem);
      todoItemElem.appendChild(listItem);
      todoItemElem.appendChild(todoElem2);
    }
  }
}

// 할 일 추가 버튼 클릭 이벤트 핸들러
const timerToDoList = new TimerToDoList();

const addButton = document.querySelector('.todo-add');
addButton.addEventListener('click', () => {
  const taskInput = document.querySelector('.todo-text');
  const timeInput = document.querySelector('.todo-time');
  const description = taskInput.value;
  const time = parseInt(timeInput.value);

  if (description.trim() === '' || isNaN(time)) {
    alert('할 일 내용과 시간은 필수 입력 항목이며 종료시간에는 숫자만 입력가능.');
    return;
  }

  timerToDoList.addTask(description, time);
  timerToDoList.startTimer(timerToDoList.tasks.length - 1);
  timerToDoList.renderTasks();

  taskInput.value = '';
  timeInput.value = '';
})



/* 전체종료 버튼 클릭시 */
const completeAllBtn = document.querySelector('.complete-all-btn');
completeAllBtn.addEventListener('click', () => {
  const completedTasks = [];

  // 할일 목록을 완료 상태로 변경하고 완료된 할 일 목록에 추가
  while (timerToDoList.tasks.length > 0) {
    const task = timerToDoList.tasks[0];
    clearInterval(task.timerId);
    task.time = 0;
    task.checkTimer();
    completedTasks.push(task);
    timerToDoList.moveCompletedTask(task);
  }

  // 팝업 창 숨기기
  const popup = document.getElementById('completionPopup');
  popup.style.display = 'none';

  // 할일 목록 리스트를 모두 삭제
  const taskListContainer = document.getElementById('taskList');
  while (taskListContainer.firstChild) {
    taskListContainer.firstChild.remove();
  }
});



// 선택 종료 버튼 클릭 이벤트 핸들러
const completeSelectedBtn = document.querySelector('.complete-selected-btn')
completeSelectedBtn.addEventListener('click', () => {
  const checkboxes = taskList.querySelectorAll('.checkbox');
  const completedTasks = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const task = this.tasks[index];
      clearTimeout(task.timerId);
      task.time = 0;
      task.checkTimer();
      completedTasks.push(task);
    }
  });

  if (completedTasks.length === 0) {
    // 선택된 할 일이 없는 경우
    completeSelectedBtn.classList.add('disabled'); // 비활성 스타일 적용
    return;
  }

  completedTasks.forEach((completedTask) => {
    const todoItemElem = taskList.querySelector(`.todo-item[data-description="${completedTask.description}"]`);
    taskList.removeChild(todoItemElem);
    this.moveCompletedTask(completedTask);
  });
  
});

// 초기 페이지 로드 시 선택종료 버튼의 상태를 확인하여 스타일 적용
window.addEventListener('DOMContentLoaded', () => {
  completeSelectedBtn.classList.add('disabled'); 
});








