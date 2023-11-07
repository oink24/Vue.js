<script>
export default {
  name: "OptionComponent3",

  // 컴포넌트 상태값(data)이 변하면 자동으로 계산해서 출력하는 함수 정의 옵션
  computed: {
    totalPrice: function () {
      return this.price * this.count;
    },
    txtCount: function () {
      return this.inputText.length;
    },
    txtLeft: function () {
      return 20 - this.inputText.length;
    },
    computeColor: function () {
      this.setColor = "green";

      if (this.txtLeft < 10) {
        this.setColor = "orange";
      }
      if (this.txtLeft < 1) {
        this.setColor = "red";
      }

      return this.setColor;
    },
  },
  data() {
    return {
      price: 1000,
      count: 1,
      inputText: "",
      setColor: "brown",
    };
  },
};
</script>

<template>
  <h4>computed 옵션</h4>
  <div>
    <input type="number" v-model="price" />원
    <input type="number" v-model="count" />개
    <p>금액 : {{ totalPrice }}</p>
  </div>
  <div>
    <p>20자 이내로 작성하세요.</p>
    <textarea cols="30" rows="10" v-model="inputText"></textarea>
    <p>글자수 : {{ txtCount }}</p>
    <p v-bind:style="{ color: computeColor }">남은 글자수 : {{ txtLeft }}</p>
  </div>
</template>

<style scoped></style>
