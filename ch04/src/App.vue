<script>
/*
  날짜 : 2023/11/09
  이름 : 강나은
  내용 : ch04. Composition API

  Vue 프로젝트 생성
  - Options API 기반     : npm init vite-app 프로젝트명
  - Composition API 기반 : npm init vite@latest
*/
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";

export default {
  name: "App",
  components: {
    Component1,
    Component2,
  },
};
</script>

<template>
  <h1>ch04. Composition API</h1>

  <h3>1) setup(), Reactivity</h3>
  <Component1 />

  <h3>2) LifeCycle Hooks</h3>
  <Component2 />

  <h3>3) Dependency Injection</h3>
</template>
