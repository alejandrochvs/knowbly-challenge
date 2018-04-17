<template>
  <div class="row main home">
    <div class="col">
      <div class="container mt-4 p-3 p-md-5 home-container">
        <div class="row align-items-start">
          <div class="col-12">
            <h1>Recent</h1>
          </div>
          <div class="col-12 col-sm-6 col-md-4 my-3" v-for="photo in recentPhotos">
            <b-card
              :img-src="'http://farm'+photo.farm+ '.staticflickr.com/'+photo.server + '/' + photo.id +
                    '_' + photo.secret + '.jpg'"
              img-alt="Image"
              img-top
            >
              <h4>
                <a class="nav-link" style="color: #333" :href="'http://flickr.com/photos/' + photo.profile.id +'/' +
                photo.id"
                   target="_blank">
                  {{photo.title || "No title"}}
                </a>
              </h4>
              <a v-if="photo.profile.first_name" :href="'http://flickr.com/' + photo.owner">
                <small class="text-muted">{{photo.profile.first_name}} {{photo.profile.last_name}}</small>
              </a>
              <small v-if="!photo.profile.first_name" class="text-muted">Anonymous</small>

            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => {
    return {
      token: '',
      recentPhotos: [],
      popularPhotos: []
    }
  },
  methods: {
    getProfile (_userId) {
      return new Promise((resolve, reject) => {
        this.$http.get(`https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=b4b1a215463c789385e178d1dbd70228&user_id=${_userId}&format=json&nojsoncallback=1`).then((profileRes) => {
          resolve(profileRes.body.profile)
        })
      })
    },
    getRecentPhotos (_page = 0) {
      this.$http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=b4b1a215463c789385e178d1dbd70228&per_page=12&page=${_page}&format=json&nojsoncallback=1`).then((photosRes) => {
        photosRes.body.photos.photo.forEach((photo) => {
          this.getProfile(photo.owner).then((profile) => {
            photo.profile = profile
            this.recentPhotos.push(photo)
          })
        })
      })
    }
  },
  mounted () {
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
