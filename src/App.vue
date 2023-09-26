<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
              v-on:removeTodoItem="removeOneItem" 
              v-on:todoCompleted="complete"></TodoList>
    <TodoFooter v-on:removeAllTodoItem="removeAll"></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'app',
  components: {
    TodoFooter,
    TodoHeader,
    TodoList,
    TodoInput
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.getItem(localStorage.key(i));
        const parse = JSON.parse(item);
        this.todoItems.push(parse);
      }
    }
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(newTodoItem) {
      const obj = { completed: false, item: newTodoItem };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    removeAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    complete(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0,0,0.03);
}
</style>
