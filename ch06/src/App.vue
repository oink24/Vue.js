<template>
  <h1>ch06. pinia 실습</h1>

  <p>
    mainStore title : {{ mainStore.title }}<br />
    mainStore count : {{ mainStore.count }}<br />
  </p>
  <p>cities : {{ mainStore.cities }}<br /></p>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>나이</th>
    </tr>
    <tr v-for="person in mainStore.persons">
      <td>{{ person.uid }}</td>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
  </table>

  <hr />
  <MyComponent1 />

  <hr />
  <MyComponent2 />
</template>

<script setup>
import { useMainStore } from "./store/mainStore";
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";

const mainStore = useMainStore();
</script>

<style scoped></style>
