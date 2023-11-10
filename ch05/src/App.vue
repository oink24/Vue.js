<script>
/*
  날짜 : 2023/11/10
  이름 : 강나은
  내용 : ch05. Vue Router 실습

  Router 패키지 설치
   - npm install vue-router@next
  
  Router 작업
   1) router - index.js 설정파일
   2) main.js - router 인스턴스 등록(use)
   3) router-link & router-view 처리
*/
</script>

<template>
  <h1>ch05. Vue Router</h1>

  <h4>Router 기본</h4>
  <router-link to="/hello">Hello</router-link>　
  <router-link to="/welcome">Welcome</router-link>　
  <router-link to="/greeting">Greeting</router-link>

  <h4>Router 중첩</h4>
  <h4>Router 데이터 전달</h4>
  <h4>Router Named View</h4>

  <hr />
  <router-view></router-view>
</template>
