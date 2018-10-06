Vue.component('todo-item', {
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  methods: {
    saveToDo () {
      this.editing = false
    },
    editToDo () {
      this.editing = true
    },
    deleteToDo () {
      this.$emit('delete-todo', this.todo.id)
    }
  },
  template:`
    <div>
      <div v-if="editing" class="edit-todo list-group-item">
        <div class="input-group">
          <input type="text" v-model="todo.text">
          <button id="save-todo" class="btn btn-success" v-on:click="saveToDo()">save ToDo</button>
        </div>
      </div>
      <div class="list-group-item" v-else>
        <span class="todo-text">
          {{todo.text}}
        </span>
        <div class="btn-group btn-group-sm float-right" role="group">
          <button class="btn btn-warning todo-edit" v-on:click="editToDo()">edit</button>
          <button class="btn btn-danger todo-delete" v-on:click="deleteToDo()">delete</button>
        </div>
      </div>
    </div>
  `
})

var app = new Vue({
  el: '#app',
    data () {
    return {
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    deleteToDo (id) {
      this.todos.splice(id, 1);
    },
    addToDo () {
      this.todos.push({id: this.todos.length, text: this.newTodo})
      this.newTodo = ''
    }
  },
})
