<template>
  <!--
  날짜 : 2023/11/09
  이름 : 강나은
  내용 : ch04. Composition API

  Vue 프로젝트 생성
  - Options API 기반     : npm init vite-app 프로젝트명
  - Composition API 기반 : npm init vite@latest
  -->
  <h1>ch04. Composition API</h1>

  <h3>1) setup(), Reactivity</h3>
  <Component1 />

  <h3>2) LifeCycle Hooks</h3>
  <Component2 />

  <h3>3) Dependency Injection</h3>
  <Component3 />
</template>

<script>
import { provide } from "vue";
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";
import Component3 from "./components/Component3.vue";

export default {
  name: "App",
  components: {
    Component1,
    Component2,
    Component3,
  },
  setup() {
    const user1 = {
      name: "김유신",
      age: 25,
      addr: "울산",
    };

    // App 컴포넌트 하위 컴포넌트에서 inject 주입
    provide("user1", user1);
  },
};
</script>
