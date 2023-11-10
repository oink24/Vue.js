import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/sub1/Hello.vue";
import Welcome from "../components/sub1/Welcome.vue";
import Greeting from "../components/sub1/Greeting.vue";
import Parent from "../components/sub2/Parent.vue";
import Child1 from "../components/sub2/Child1.vue";
import Child2 from "../components/sub2/Child2.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/hello", name: "Hello", component: Hello },
    { path: "/welcome", name: "Welcome", component: Welcome },
    { path: "/greeting", name: "Greeting", component: Greeting },
    {
      path: "/parent",
      name: "Parent",
      component: Parent,
      children: [
        { path: "child1", component: Child1 },
        { path: "child2", component: Child2 },
      ],
    },
  ],
});

// router 인스턴스 내보내기 -> main.js에서 등록
export default router;
