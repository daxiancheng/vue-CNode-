<template>
  <div class="navbar">
    <div class="navbarInner">
      <router-link to="/"><img src="../assets/cnodejs_light.svg" alt /></router-link>
      <div class="inputBox">
        <img src="../assets/sousuo.svg" alt="">
        <input type="text" placeholder="搜索功能未添加"/>
      </div>
      <ul>
        <li>首页</li>
        <li>新手入门</li>
        <li>API</li>
        <li>关于</li>
        <li>注册</li>
        <li>登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 100%;
  padding: 5px;
  background-color: #444;
}
.navbarInner {
  width: 75%;
  height: 40px;
  margin: 0px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
img {
  width: 120px;
  height: auto;
}
.inputBox {
  margin: 0 0 -4px 20px;
  position: relative;
}
.inputBox img {
  width: 16px;
  height: auto;
  transform: rotate(90deg);
  position: absolute;
  top:5px;
  left: 6px;
}
input {
  width: 234px;
  height: 26px;
  border: none;
  background-color: #888;
  border-radius: 15px;
  padding-left: 24px;
  transition: background-color 0.3s;
}
input:focus{
  background-color: #fff;
  outline: none;
  border: 1px solid rgba(0, 0, 255, 0.2);
}
ul{
 position: absolute;
 right: 2px; 
 margin: 0;
 padding: 0;
}
ul>li{
  display: inline-block;
  margin: 0 13px;
  color: #ccc;
  font-size: 13px;
}
</style>
