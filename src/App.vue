<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    
    <TodoInput></TodoInput>
      <!-- Vuex를 이용함에 따라 위 코드로 변경  -->
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> -->
    
    <TodoList></TodoList>
    <!-- Vuex를 이용함에 따라 위 코드로 변경  -->
    <!-- <TodoList v-bind:propsdata="todoItems"
              v-on:removeTodoItem="removeOneItem" 
              v-on:todoCompleted="complete"></TodoList> -->

              
    <TodoFooter></TodoFooter>
      <!-- Vuex를 이용함에 따라 위 코드로 변경  -->
    <!-- <TodoFooter v-on:removeAllTodoItem="removeAll"></TodoFooter> -->
    <DemoView></DemoView>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import DemoView from './components/DemoView.vue'

export default {
  name: 'app',
  components: {
    TodoFooter,
    TodoHeader,
    TodoList,
    TodoInput,
    DemoView
  },
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  methods: {
    // Vuex를 사용함에 따라 아래 코드는 store.js로 
    // addOneItem(newTodoItem) {
    //   const obj = { completed: false, item: newTodoItem };
    //   localStorage.setItem(newTodoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // Vuex를 사용함에 따라 아래 코드는 store.js로 
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // Vuex를 사용함에 따라 아래 코드는 store.js로 
    // removeAll() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
    // Vuex를 사용함에 따라 아래 코드는 store.js로 
    // complete(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // }
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
