<template>
  <div id="app">
    <TopNav></TopNav>
    <div class="EmptyBox"></div>
    <keep-alive>
       <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import TopNav from './components/TopNav'
export default {
  components:{
    TopNav

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.EmptyBox{
  width: 100%;
  height: 42px;
}
</style>
