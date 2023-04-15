

var app = new Vue({
  el:'#app',
  data:{
    addtext:'',
    dueDate:'',
    todos:[
      {done:false, text:'빵사기', DueDate:"20191201"},
      {done:false, text:'커피사기', DueDate:"20190702"},
      {done:false, text:'공부하기', DueDate:"201907010"},
      {done:false, text:'놀기', DueDate:"201908011"},
      {done:false, text:'영화보기', DueDate:"20191021"},
    ]
  },
  computed:{
    remaining: function(){
      return this.todos.filter(function(val){
        return val.done;
      }).length;
    },
    overdate: function() {
      return this.todos.filter(function(val){
          var date = new Date();
          var year = date.getFullYear();
          var month = new String(date.getMonth() + 1);
          var day = new String(date.getDate());
          if(month.length == 1) month = "0" + month;
          if(day.length == 1) day = "0" + day;
          var due_date = year+month+day;
          return val.DueDate < due_date;
      }).length;
    }

  },
  methods:{
    addToDo: function() {
      if (this.addtext) {
          var due_date = this.dueDate;
          if(this.dueDate == "") {
              var date = new Date();
              date = new Date(Date.parse(date) + 1 * 1000 * 60 * 60 * 24);
              var year = date.getFullYear();
              var month = new String(date.getMonth() + 1);
              var day = new String(date.getDate());
              if(month.length == 1) month = "0" + month;
              if(day.length == 1) day = "0" + day;
              due_date = year+month+day;
          }
          this.todos.push({done:false, text:this.addtext, DueDate:due_date});
          this.addtext = '';
      }
  },
    cleanToDo:function(){
      this.todos = this.todos.filter(function(val){
        return val.done == false;
      })
    },
    extendDate: function(index) {
      var str_date = this.todos[index].DueDate;
      var y = str_date.substr(0, 4);
      var m = str_date.substr(4, 2);
      var d = str_date.substr(6, 2);

      var date = new Date(Date.parse(new Date(y, m-1, d)) + 1 * 1000 * 60 * 60 *24);
      var year = date.getFullYear();
      var month = new String(date.getMonth() + 1);
      var day = new String(date.getDate());
      if(month.length == 1) month = "0" + month;
      if(day.length == 1) day = "0" + day;
      var due_date = year+month+day;

      this.todos[index].DueDate = due_date;
    },
    sortData: function (type) {
        if(type == "todo") {
            this.todos.sort(function (a, b) {
                console.log(a.text);
                console.log(b.text);
                console.log((a.text < b.text ? -1 : 1));
                return (a.text < b.text ? -1 : 1);
            });
        } else {
            this.todos.sort(function (a, b) {
                return  (a.DueDate < b.DueDate ? -1 : 1);
            });
        }
    },

  }
})