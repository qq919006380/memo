<template>
    <div id="nav">
      <div class="my">登录|关于我</div>
      <div class="add" @click='add'>添加</div>
      <!-- <router-link to="/">登录</router-link> |
      <router-link to="/about">关于我</router-link>
      <router-view/> -->
    </div>
</template>

<script>
export default {
methods :{
    add(){
      console.log(123)
    }
  }
}
</script>

<style>
#nav::after{
  content: "";
  clear: both;
  display: block
}
.my{
float: right
}
.add{
  float: left;
}
</style>
