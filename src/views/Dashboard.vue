<template>
  <div class="dashboard">
    <div class="container">
      <div v-if="user" class="text-center">
        <h2>Welcome, {{ user.firstname }}</h2>
      </div>
      <div class="row text-center sections">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h3>Publications</h3>
                <hr>
                <div v-if="userPublications && userPublications.length">
                <div v-for="(manuscript, key) in userPublications" :key="key">
                    <publication :manuscript="manuscript"></publication>
                  </div>
                </div>
                <div v-else>You have not published any manuscripts yet</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h3>Communities</h3>
                <hr>
                <div v-if="userCommunities && userCommunities.length">
                  <div v-for="(community, key) in userCommunities" :key="key">
                    <community :community="community"></community>
                  </div>
                </div>
                <div v-else>You have not joined any communities yet</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h3>Reviews</h3>
                <hr>
                <div v-if="peerReviews && peerReviews.length > 0">
                  <div v-for="(review, key) in peerReviews" :key="key">
                    <review :review="review"></review>
                  </div>
                </div>
                <div v-else>None of your manuscripts have been reviewed yet</div>
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
    userCommunities() {
      const { community, user } = this.$store.state
      if(!community || !user) {
        return false
      }
      return community.filter(record => {
        return user.communities.map(userCommunities => userCommunities._id).indexOf(record._id) !== -1
      })
    },
    user() {
      return this.$store.state.user
    },
    userPublications() {
      const { user } = this.$store.state
        if(user) {
          return user.manuscripts       
        }
        return []
      },
    peerReviews() {
      const { user } = this.$store.state
      if(!user || !user.manuscripts) {
        return false
      }
      let reviews = []
      user.manuscripts.forEach(manuscript => {
        reviews.concat(manuscript.reviews)
      })
      return reviews
    }
  },
  
  components: {
    publication,
    review,
    community
  },

  beforeMount() {
    this.$store.dispatch('getData', 'profile')
  }
}
</script>
