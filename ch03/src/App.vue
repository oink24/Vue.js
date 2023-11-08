<script>
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import OptionComponent1 from "./components/OptionComponent1.vue";
import OptionComponent2 from "./components/OptionComponent2.vue";
import OptionComponent3 from "./components/OptionComponent3.vue";
import OptionComponent4 from "./components/OptionComponent4.vue";
import PropsComponent1 from "./components/PropsComponent1.vue";
import PropsComponent2 from "./components/PropsComponent2.vue";
import PropsComponent3 from "./components/PropsComponent3.vue";
import PropsComponent4 from "./components/PropsComponent4.vue";
import EmitComponent1 from "./components/EmitComponent1.vue";
import LifeComponent from "./components/LifeComponent.vue";

export default {
  name: "App",
  data() {
    return {
      cities: ["서울", "대전", "대구", "부산", "광주"],
      isShow: true,
    };
  },
  methods: {
    emitHandler: function (data) {
      console.log(data.name);
      console.log(data.age);
    },
    btnToggle: function () {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  components: {
    MyComponent1,
    MyComponent2,
    MyComponent3,
    OptionComponent1,
    OptionComponent2,
    OptionComponent3,
    OptionComponent4,
    PropsComponent1,
    PropsComponent2,
    PropsComponent3,
    PropsComponent4,
    EmitComponent1,
    LifeComponent,
  },
};
</script>

<template>
  <h1>ch03. 컴포넌트</h1>
  <h2>1) 컴포넌트</h2>
  <MyComponent1 />
  <MyComponent2 />
  <MyComponent3 />

  <hr />
  <h2>2) Options API</h2>
  <OptionComponent1 />
  <OptionComponent2 />
  <OptionComponent3 />
  <OptionComponent4 />

  <hr />
  <h2>3) 컴포넌트 통신</h2>
  <PropsComponent1 name="김유신" />
  <PropsComponent1 name="김춘추" age="21" />
  <ul>
    <PropsComponent2 v-for="city in cities" :inputCity="city" />
  </ul>
  <PropsComponent3 c3Name="홍길동" c3Age="33" />
  <EmitComponent1 name="홍길동" age="55" v-on:myEmit="emitHandler" />

  <hr />
  <h2>4) 컴포넌트 생명주기</h2>
  <LifeComponent v-if="isShow" />
  <button @click="btnToggle">토글</button>
</template>

<style scoped></style>
