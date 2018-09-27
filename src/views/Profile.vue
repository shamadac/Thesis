<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="profile-box col-md-4">
          <div class="avatar text-center">
            <i class="fas fa-user-circle"></i>
          </div>
          <hr>
          <div class="text-center">
            <p>{{ $store.getters.userFullName }}</p>
            <p>{{ user.username }}</p>
            <p><a v-bind:href="'mailto:' + user.email">{{ user.email }}</a></p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="mb-2">
            <h3>Publications</h3>

            <div v-if="manuscripts && manuscripts.length !== 0">
              <div v-for="(manuscript, key) in manuscripts" :key="key">
                <publication :manuscript="manuscript"></publication>
              </div>
            </div>

            <div v-else>
              You have not published any manuscripts yet.
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
  }
}
</script>
