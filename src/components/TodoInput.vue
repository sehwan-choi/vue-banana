<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo({ newTodoItem, showModal })">
    <span class="addContainer addBtn" v-on:click="addTodo({newTodoItem, showModal})">
      <i class="fa-solid fa-plus"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fa-solid fa-circle-xmark" @click="showModal = false"></i>
      </h3>
      <h3 slot="body">
        내용을 입력해주세요.
      </h3>

      <h3 slot="footer">
        <button class="Btn" @click="showModal = false">
          OK
        </button>
      </h3>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/ModalComponent.vue';
// import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem);
        // Vuex를 사용함에 따라 위 코드로 수정
        // this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = ""
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 1.5rem;
  width: 30em;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>