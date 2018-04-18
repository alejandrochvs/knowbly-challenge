<template>
  <div class="row main home">
    <div class="col">
      <div class="container my-5 p-4 home-container">
        <div class="row align-items-start">
          <div class="col-12">
            <h1>Recent</h1>
          </div>
          <div v-show="loading" v-for="loadingCard in loadingArr" class="col-12 col-sm-6 col-md-4 my-3">
            <loading-card></loading-card>
          </div>
          <div v-show="!loading" class="col-12 col-sm-6 col-md-4 my-3" v-for="photo in recentPhotos">
            <b-card
              :img-alt="photo.title"
              img-top
            >
              <img class="w-100" :src="photo.sizes[1].source" alt="">
              <b-card-header>
                <h4 class="one-line">
                  <a  style="color: #333" :href="'http://flickr.com/photos/' + photo.profile.id +'/' +
                photo.id" :title="photo.title || 'No title'" target="_blank">
                    {{photo.title || "No title"}}
                  </a>
                </h4>
              </b-card-header>
              <b-card-footer>
                <a target="_blank" v-if="photo.profile.first_name" :href="'http://flickr.com/' + photo.owner">
                  <small class="text-muted">{{photo.profile.first_name}} {{photo.profile.last_name}}</small>
                </a>
                <small v-if="!photo.profile.first_name" class="text-muted">Anonymous</small>
              </b-card-footer>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadingCard from "./loading-card";
  export default {
    name: 'home',
    components: {LoadingCard},
    data: () => {
      return {
        token: '',
        recentPhotos: [],
        loadingArr: new Array(12),
        loading : true,
        api_key : 'b0dc2f2317d52ae7fe19397947f3d0a4'
      }
    },
    methods: {
      getProfile(_userId) {
        return new Promise((resolve, reject) => {
          this.$http.get(`https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=${this.api_key}&user_id=${_userId}&format=json&nojsoncallback=1`).then((profileRes) => {
            resolve(profileRes.body.profile)
          })
        })
      },
      getSizes(_photoId) {
        return new Promise((resolve, reject) => {
          this.$http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${this.api_key}&photo_id=${_photoId}&format=json&nojsoncallback=1`).then((profileRes) => {
            resolve(profileRes.body.sizes.size)
          })
        })
      },
      getRecentPhotos(_page = 0) {
        this.loading = true;
        this.$http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.api_key}&per_page=12&page=${_page}&format=json&nojsoncallback=1`).then((photosRes) => {
          photosRes.body.photos.photo.forEach((photo) => {
            console.log(photo)
            this.getProfile(photo.owner).then((profile) => {
              photo.profile = profile
              this.getSizes(photo.id).then((sizes) => {
                photo.sizes = sizes
                this.recentPhotos.push(photo)
                if (this.recentPhotos.length === 12) {
                  this.loading = false;
                }
              })
            })
          })
        })
      }
    },
    mounted() {
      this.getRecentPhotos()
    }
  }
</script>

<style scoped lang="scss">
  .home {
    .home-container {
      background: whitesmoke;
      border-radius: 5px;
    }
  }
</style>
