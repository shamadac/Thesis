<template>
  <div class="dashboard">
    <div class="container">
      <div v-if="user" class="text-center">
        <h2>Welcome, {{ user.firstname }}</h2>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h3>Publications</h3>
                  <div v-for="(manuscript, key) in manuscripts" :key="key">
                    <publication :manuscript="manuscript"></publication>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h3>Communities</h3>
                <div v-for="(community, key) in communities" :key="key">
                  <community :community="community"></community>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h3>Reviews</h3>
                <div v-for="(review, key) in reviews" :key="key">
                  <review :review="review"></review>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    },
    communities() {
      return this.$store.state.community
    },
    reviews() {
      return this.$store.state.reviews
    }
  },
  
  components: {
    publication,
    review,
    community
  }
}
</script>
