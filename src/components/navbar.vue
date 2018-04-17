<template>
  <b-navbar :sticky="true" class="row Navbar" toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/home">Flickr</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse" class="pt-3 pt-md-0">
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input @input="search()" v-model="query.tags" size="sm" class="mr-sm-2" type="text"
                        placeholder="Search"></b-form-input>
          <router-link :to="{ path: 'images', query: query}">
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </router-link>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      query: {
        tags: ''
      }
    }
  },
  methods: {
    search () {
      if (!this.query.tags) {
        this.$router.push({path: '/images'})
      }
      this.$router.push({path: '/images', query: this.query})
    }
  },
  mounted () {
    if (this.$route.query.tags) {
      this.query = this.$route.query
    }
  }
}
</script>

<style scoped>
  .Navbar {
    border-bottom: solid 1px lightgray;
    height: auto;
  }
</style>
