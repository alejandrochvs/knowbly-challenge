<template>
  <div class="row main images justify-content-center">
    <div class="col">
      <div class="container my-5 p-4 images-container">
        <div class="row flex-row">
          <div class="col-12">
            <h1>
              {{$route.query.tags ? 'Results for "' + $route.query.tags + '"' : 'Any'}}
            </h1>
            <hr>
          </div>
          <div v-show="loading" v-for="loadingCard in loadingArr" class="col-12 col-sm-6 col-md-4 my-3">
            <loading-card></loading-card>
          </div>
          <div v-show="!loading" class="col-12 col-sm-6 col-md-4 my-3" v-for="photo in photos">
            <b-card
              :img-alt="photo.title"
              img-top
            >
              <img class="w-100" :src="photo.sizes[1].source" alt="">
              <b-card-header>
                <h4 class="one-line">
                  <a class="" style="color: #333" :href="'http://flickr.com/photos/' + photo.profile.id +'/' +
                photo.id" :title="photo.title || 'No title'" target="_blank">
                    {{photo.title || "No title"}}
                  </a>
                </h4>
              </b-card-header>
              <b-card-footer>
                <a v-if="photo.profile.first_name" :href="'http://flickr.com/' + photo.owner">
                  <small class="text-muted">{{photo.profile.first_name}} {{photo.profile.last_name}}</small>
                </a>
                <small v-if="!photo.profile.first_name" class="text-muted">Anonymous</small>
              </b-card-footer>
            </b-card>
          </div>
          <div class="col-12">
            <b-pagination-nav per-page="12" v-if="pages" align="center" class="m-auto" base-url="#"
                              :number-of-pages="pages"
                              v-model="page"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingCard from "./loading-card";
export default {
  name: 'images',
  components: {LoadingCard},
  data () {
    return {
      photos: [],
      loadingArr: new Array(12),
      page: 0,
      pages: 0,
      loading: true,
      api_key: 'b0dc2f2317d52ae7fe19397947f3d0a4'
    }
  },
  methods: {
    getProfile (_userId) {
      return new Promise((resolve, reject) => {
        this.$http.get(`https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=${this.api_key}&user_id=${_userId}&format=json&nojsoncallback=1`).then((profileRes) => {
          resolve(profileRes.body.profile)
        })
      })
    },
    getSizes (_photoId) {
      return new Promise((resolve, reject) => {
        this.$http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${this.api_key}&photo_id=${_photoId}&format=json&nojsoncallback=1`).then((profileRes) => {
          resolve(profileRes.body.sizes.size)
        })
      })
    },
    getPhotos () {
      this.loading = true;
      let url =
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.api_key}&tags=${encodeURI(this.$route.query.tags)}&per_page=12&page=${this.page}&format=json&nojsoncallback=1`
      this.$http.get(url).then((photosRes) => {
        this.pages = photosRes.body.photos.pages
        this.photos = []
        photosRes.body.photos.photo.forEach((photo) => {
          this.getProfile(photo.owner).then((profile) => {
            photo.profile = profile
            this.getSizes(photo.id).then((sizes) => {
              photo.sizes = sizes
              this.photos.push(photo)
              if (this.photos.length === 12) {
                this.loading = false;
              }
            })
          })
        })
      })
    }
  },
  mounted () {
    this.getPhotos()
  },
  watch: {
    '$route.query' () {
      this.getPhotos()
    }
  }
}
</script>

<style scoped lang="scss">
  .images {
    .images-container {
      background: whitesmoke;
      border-radius: 5px;
    }
  }
</style>
