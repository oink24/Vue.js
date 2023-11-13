<template>
  <h3>MyComponent2</h3>
  <p>
    <input type="text" v-model="inputTodo" placeholder="할 일 입력" />
    <button @click="btnAdd">등록</button>
    <button @click="btnClear">초기화</button>
  </p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
      <th>관리</th>
    </tr>
    <tr v-for="todo in todosStore.todos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="done" v-if="todo.isFinished">완료</td>
      <td class="notyet" v-else="todo.isFinished">미완료</td>
      <td>
        <button @click="btnRemove(todo.id)">삭제</button>
        <button @click="btnDone(todo.id)">완료</button>
      </td>
    </tr>
  </table>

  <br />
  <table border="1">
    <caption>
      완료된 할 일
    </caption>
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
    </tr>
    <tr v-for="todo in todosStore.finishedTodos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="done">완료</td>
    </tr>
  </table>

  <br />
  <table border="1">
    <caption>
      미완료된 할 일
    </caption>
    <tr>
      <th>번호</th>
      <th>할일</th>
      <th>상태</th>
    </tr>
    <tr v-for="todo in todosStore.unfinishedTodos">
      <td>{{ todo.id }}</td>
      <td>{{ todo.text }}</td>
      <td class="notyet">미완료</td>
    </tr>
  </table>
</template>

<script setup>
import { useTodos } from "../store/todos";
import { ref } from "vue";

// 전역스토어 가져오기
const todosStore = useTodos();

const inputTodo = ref(null); // 양방향바인딩(v-model) 위해
const btnAdd = () => {
  todosStore.addTodo(inputTodo.value);
};

const btnDone = (id) => {
  todosStore.doneTodo(id);
};
const btnRemove = (id) => {
  todosStore.removeTodo(id);
};

const btnClear = () => {
  todosStore.clearTodo();
};
</script>

<style scoped>
.done {
  color: green;
}
.notyet {
  color: red;
}
table {
  min-width: 200px;
  text-align: center;
}
</style>
