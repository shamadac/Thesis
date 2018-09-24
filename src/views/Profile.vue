<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="avatar text-center">
            <i class="fas fa-user-circle"></i>
          </div>
          <hr>
          <div class="text-center">
            <p>{{ $store.getters.userFullName }}</p>
            <p>{{ user.username }}</p>
            <p><a v-bind:href="'mailto:' + user.email">{{ user.email }}</a></p>

            <button @click="$router.push({ path: '/submit' })" type="button" class="btn btn-primary">Submit a manuscript</button>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-2">
            <div class="card-body">
              <publication :manuscripts="manuscripts"></publication>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body">
              <review :reviews="reviews"></review>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body text-center">
              <h2>Metrics</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import authMixin from '../mixins/auth'
import Publication from '../components/Publication.vue'
import Review from '../components/Review.vue'

export default {
  mixins: [ authMixin ],

  components: {
    Publication,
    Review
  },

  computed: {
    user() {
      return this.$store.state.user
    },
    manuscripts() {
      return this.$store.state.manuscript
    },
    reviews() {
      return this.$store.state.review
    }
  },

  beforeMount() {
    this.$store.dispatch('getData', 'profile')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
