<template>
  <div class="dashboard">
    <!-- <div class="container">
      <div v-if="user" class="text-center">
        <h2>Welcome, {{ user.firstname }}</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <publication :manuscripts="manuscripts"></publication>
        </div>
        <div class="col-md-6">
          <review></review>
        </div>
        <div class="col-md-6">
          <community></community>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import authMixin from '../mixins/auth'
import publication from '../components/Publication.vue'
import review from '../components/Review.vue'
import community from '../components/Community.vue'

export default {

  mixins: [ authMixin ],

  computed: {
    user() {
      return this.$store.state.user
    },
    manuscripts() {
      return this.$store.state.manuscript
    }
  },
  
  components: {
    publication,
    review,
    community
  }
}
</script>
