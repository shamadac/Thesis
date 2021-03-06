<template>
  <div class="profile">
    <div class="container">
      <h2 class="text-center mb-5">Your Profile</h2>
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

        <div class="col-md-8 stats-box">
          <div class="mb-2">
            <div class="well profile-panel">
              <h3 v-bind:class="{ active: activePanel === 'communities' }" @click="setActivePanel('communities')" class="inline-header">Communities</h3>
              <h3 v-bind:class="{ active: activePanel === 'publications' }" @click="setActivePanel('publications')" class="inline-header">Publications</h3>
            </div>

            <hr>
            <!-- communities -->
            <div class="active-panel" v-show="activePanel === 'communities'">
              <div v-if="user && user.communities && user.communities.length > 0">
                <div class="communities">
                  <div v-for="(community, key) in user.communities" :key="key">
                    <community :community="community"></community>
                  </div>
                </div>
              </div>
              <div v-else>
                <p>
                  You are not yet a part of any communities; in order to submit a manuscript, you must join one first!
                </p>
                <div class="communities">
                  <div v-for="(community, key) in communities" :key="key">
                    <community :community="community" :options="{ showJoinLink: true }"></community>
                  </div>
                </div>
              </div>
            </div>

            <!-- manuscripts -->
            <div class="active-panel" v-show="activePanel === 'publications'">
              <div v-if="user.manuscripts && user.manuscripts.length !== 0">
                <div v-for="(manuscript, key) in user.manuscripts" :key="key">
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
  </div>  
</template>

<script>
import authMixin from '../mixins/auth'
import Publication from '../components/Publication.vue'
import Review from '../components/Review.vue'
import Community from '../components/Community.vue'

export default {
  name: 'profile',

  mixins: [ authMixin ],

  components: {
    Publication,
    Review,
    Community
  },

  data: () => ({
    activePanel: 'communities'
  }),

  methods: {
    setActivePanel(id) {
      if(id === 'publications' && !this.$store.state.user.communities.length) {
        this.$store.dispatch('updateAlert', {
          type: 'error',
          message: 'You must join a community first before publishing!'
        })
        return
      }
      this.activePanel = id
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    },
    userCommunities() {
      return this.$store.state.community.filter(community => {
        return community._id === this.$store.state.user._id
      })
    },
    manuscripts() {
      return this.$store.state.manuscript
    },
    reviews() {
      return this.$store.state.review
    },
    communities() {
      return this.$store.state.community
    }
  }
}
</script>
