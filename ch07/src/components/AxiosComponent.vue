<template>
  <h3>Axios 실습</h3>

  <h4>Get</h4>
  <button @click="btnGetUser">User 요청</button>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>나이</th>
      <th>주소</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>

  <h4>Get</h4>
  <h4>POST</h4>
  <h4>PUT</h4>
  <h4>DELETE</h4>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const users = ref([]);
const btnGetUser = () => {
  axios({
    url: "http://localhost:8080/Ch10/user1",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log(response);
      users.value = response.data;
      console.log(users.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped></style>
