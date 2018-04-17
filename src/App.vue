<template>
  <div id="app">
    <div class="container-fluid">
      <Navbar></Navbar>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from './components/footer'
  import Navbar from './components/navbar'

  export default {
    name: 'App',
    components: {Navbar, Footer}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .main{
      min-height: 90vh;
      background: white;
      .one-line{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-body{
        padding: 0;
        background: white;
      }
      b-card-header{
        background: white;
      }
      b-card-footer{
        background: white;
      }
    }
  }
</style>
