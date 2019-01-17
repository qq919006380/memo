<template>
  <div id="nav">
    <div class="my">登录|关于我</div>
    <div class="add" @click="add">添加</div>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      console.log(123);
      this.$emit("addd");
    }
  }
};
</script>

<style>
#nav::after {
  content: "";
  clear: both;
  display: block;
}
.my {
  float: right;
}
.add {
  float: left;
}
</style>
