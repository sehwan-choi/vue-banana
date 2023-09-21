<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'

export default {
  components: {
    'TodoFooter' : TodoFooter,
    'TodoHeader' : TodoHeader,
    'TodoList' : TodoList,
    'TodoInput' : TodoInput
  }
}
</script>

<style>

</style>
