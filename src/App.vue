<template>
  <div id="app">
    <navbar/>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
    
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components:{
    navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main{
  width: 74%;
  margin: 15px auto;
}
body{
  margin: 0;
  padding: 0;
  background-color: #e1e1e1;
}
</style>
