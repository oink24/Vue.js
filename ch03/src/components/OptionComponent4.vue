<script>
export default {
  name: "OptionComponent4",
  watch: {
    inputTxt: function () {
      const position = this.inputTxt.indexOf(this.forbiddenTxt);
      if (position >= 0) {
        alert(this.forbiddenTxt + "은 입력불가합니다.");
        this.inputTxt = this.inputTxt.substring(0, position);
      }
    },
  },
  data() {
    return {
      forbiddenTxt: "바보",
      inputTxt: "",
    };
  },
};
</script>

<template>
  <h4>watch 옵션</h4>
  <div>
    <p>금지어 발견 : {{ forbiddenTxt }}</p>
    <textarea v-model="inputTxt" cols="30" rows="10"></textarea>
  </div>
</template>

<style scoped></style>
