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

export default {
  name: "App",
  components: {
    Component1,
  },
};
</script>

<template>
  <h1>ch04. Composition API</h1>

  <h3>1) setup()</h3>
  <Component1 />

  <h3>2) Reactivity</h3>
  <h3>3) LifeCycle Hooks</h3>
  <h3>4) Dependency Injection</h3>
</template>
