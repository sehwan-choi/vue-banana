import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const item = localStorage.getItem(localStorage.key(i));
                const parse = JSON.parse(item);
                arr.push(parse);
            }
        }
        console.log(arr);
        return arr;
    },
}

export default new Vuex.Store({
    state: {
      todoItems: storage.fetch(),
        price: 100
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        },
        originalPrice(state) {
            return state.price;
        },
        doublePrice(state) {
            return state.price * 2;
        },
        triplePrice(state) {
            return state.price * 3;
        }
    },
    mutations: {
        addOneItem(state, newTodoItem) {
            const obj = { completed: false, item: newTodoItem };
            localStorage.setItem(newTodoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            console.log('removeOneItem',payload);
            localStorage.removeItem(payload.item);
            state.todoItems.splice(payload.index, 1);
        },
        removeAll(state) {
            localStorage.clear();
            state.todoItems = [];
        },
        complete(state, payload) {
            console.log(payload);
            
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
    },
})