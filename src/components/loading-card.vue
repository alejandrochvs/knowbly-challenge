<template>
  <b-card>
    <div class="img">
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <i class="fa fa fa-circle-o-notch fa-spin fa-4x"></i>
        </div>
      </div>
    </div>
    <b-card-header>
      <h4>
        <div class="spinner"></div>
      </h4>
    </b-card-header>
    <b-card-footer>
      <small class="text-muted">
        <span class="spinner"></span>
      </small>
    </b-card-footer>
  </b-card>
</template>

<script>
	export default {
		name: "loading-card"
	}
</script>

<style scoped lang="scss">
  .card{
    .img{
      display: block;
      background: white;
      height: 342px;
      width: 100%;
      .fa{
        color: lightgray;
      }
    }
    h4,small{
      display: block;
      background: white;
      border-radius: 5px;
      color: white;
      overflow: hidden;
      .spinner{
        display: block;
        background: lightgray;
        width: 40%;
        height: 30px;
        position: relative;
        left: -40%;
        transition: all .3s ease;
        animation: loader 2s ease-in-out infinite;
      }
    }
    small{
      width: 60%;
      .spinner{
        height: 20px;
      }
    }
  }
  @keyframes loader{
    0%{
      left: -40%;
    }
    100% {
      left: 140%;
    }
  }
</style>
