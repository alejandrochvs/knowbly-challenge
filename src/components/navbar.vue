<template>
  <b-navbar sticky="true" class="row Navbar" toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Flickr</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse" class="pt-3 pt-md-0">
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <router-link :to="{ path: 'images'}">
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </router-link>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>
  .Navbar {
    background: whitesmoke;
    border-bottom: solid 1px lightgray;
    height: auto;
  }
</style>
