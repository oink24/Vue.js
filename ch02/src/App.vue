<template>
  <h1>ch02. Vue Directive</h1>

  <h2>1) v-text</h2>
  <p v-text="tit1"></p>
  <p>{{ tit2 }}</p>

  <h2>2) v-show</h2>
  <p v-show="result1">show result1</p>
  <p v-show="result2">show result2</p>

  <h2>3) v-if</h2>
  <p v-if="result1">if result1 is true</p>
  <p v-if="result2">if result2 is true</p>
  <p v-else>else result2</p>

  <p v-if="score >= 90">A...</p>
  <p v-else-if="score >= 80">B...</p>
  <p v-else-if="score >= 70">C...</p>
  <p v-else-if="score >= 60">D...</p>
  <p v-else>F...</p>

  <p v-if="tit3">{{ tit3 }}</p>
  <p v-else>tit3 empty</p>

  <h2>4) v-for</h2>
  <ul>
    <li v-for="i in 3">i : {{ i }}</li>
  </ul>
  <ul>
    <li v-for="city in cities">{{ city }}</li>
  </ul>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>나이</th>
    </tr>
    <tr v-for="i in persons">
      <td>{{ i.uid }}</td>
      <td>{{ i.name }}</td>
      <td>{{ i.age }}</td>
    </tr>
  </table>

  <h2>5) v-on</h2>
  <button v-on:click="handler1">button1</button>
  <button v-on:click="handler2(10)">button2</button>
  <button @click="handler3">button3</button>

  <p>count : {{ count }}</p>
  <button v-on:click="countUp">증가</button><br />

  <select v-on:click="changeCity">
    <option>서울</option>
    <option>대전</option>
    <option>대구</option>
    <option>부산</option>
    <option>광주</option>
  </select>

  <!-- prevent 동시 명시 -->
  <form v-on:submit.prevent="formUser1" method="post">
    아이디 : <input type="text" name="uid" /><br />
    이름 : <input type="text" name="name" /><br />
    나이 : <input type="text" name="age" /><br />
    <input type="submit" value="전송" />
  </form>

  <h2>6) v-bind</h2>
  <img v-bind:src="img1" alt="flower1" style="width: 300px" /><br />
  <img :src="img2" alt="flower2" style="width: 300px" /><br />

  <a :href="link1">네이버 바로가기</a><br />
  <a :href="link2">다음 바로가기</a>

  <div :style="myStyle"></div>

  <h2>7) v-model</h2>
  <p>이름 : {{ myName }}</p>
  <input type="text" placeholder="이름 입력" v-model="myName" />

  <p>{{ myText }}</p>
  <p>문자갯수 : {{ myText.length }}</p>
  <textarea v-model="myText" cols="30" rows="10"></textarea>

  <p>
    <label><input type="checkbox" v-model="myCheck" />체크박스</label>
    체크상태 : {{ myCheck }}
  </p>
  <p>
    {{ myCities }}<br />
    <label><input type="checkbox" v-model="myCities" value="서울" />서울</label>
    <label><input type="checkbox" v-model="myCities" value="대전" />대전</label>
    <label><input type="checkbox" v-model="myCities" value="대구" />대구</label>
    <label><input type="checkbox" v-model="myCities" value="부산" />부산</label>
    <label><input type="checkbox" v-model="myCities" value="광주" />광주</label>
  </p>

  <form @submit.prevent="formUser2" method="post">
    아이디 : <input type="text" v-model="myUser.uid" /><br />
    이름 : <input type="text" v-model="myUser.name" /><br />
    나이 : <input type="text" v-model="myUser.age" /><br />
    <input type="submit" value="전송" />
  </form>
</template>

<script>
export default {
  name: "App",
  methods: {
    handler1: function () {
      alert("button1111!");
    },
    handler2: function (num) {
      alert("입력한 숫자는? -> " + num);
    },
    handler3: function () {
      alert("button3333!");
    },
    countUp: function () {
      this.count++;
    },
    changeCity: function (e) {
      alert(e.target.value);
    },

    formUser1(e) {
      // e.preventDefault();
      const uid = e.target.elements.uid.value;
      const name = e.target.elements.name.value;
      const age = e.target.elements.age.value;

      console.log("uid : " + uid);
      console.log("name : " + name);
      console.log("age : " + age);
    },
    formUser2() {
      console.log("uid : " + this.myUser.uid);
      console.log("name : " + this.myUser.name);
      console.log("age : " + this.myUser.age);
    },
  },
  data() {
    return {
      tit1: "Hello Vue",
      tit2: "Welcome Vue",
      tit3: "",
      result1: true,
      result2: false,
      score: 89,
      cities: ["서울", "대전", "대구", "부산", "광주"],
      persons: [
        { uid: "a101", name: "김유신", age: 23 },
        { uid: "a102", name: "김춘추", age: 21 },
        { uid: "a103", name: "장보고", age: 33 },
        { uid: "a104", name: "강감찬", age: 43 },
        { uid: "a105", name: "이순신", age: 53 },
      ], // 오브젝트배열
      count: 0,
      img1: "/img/flower1.jpg",
      img2: "/img/flower2.jpg",
      link1: "https://naver.com",
      link2: "https://daum.net",
      myStyle: { width: "100px", height: "100px", background: "lightblue" },
      myName: "홍길동",
      myText: "",
      myCheck: false,
      myCities: [],
      myUser: { uid: "", name: "", age: 0 },
    };
  },
};
</script>

<style scoped></style>
