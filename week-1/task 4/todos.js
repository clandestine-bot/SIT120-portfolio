new Vue({
  el: "#app",
  data: {
    todos: [
      { text: "Assignment 1: Project", done: false },
      { text: "Assignment 2: Project and PPT", done: false },
      { text: "Assignment 3: Portfolio", done: true },
    ]
  },
  methods: {
  	toggle: function(todo){
    	todo.done = !todo.done
    }
  }
})
