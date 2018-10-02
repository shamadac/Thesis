<template>
  <div class="card community mb-2">
    <div v-if="community" class="card-body">
      <h5 class="card-title">{{ community.title }}</h5>
      <p class="card-text">
        {{ community.description | excerpt }} <span class="clickable">Read More</span>
      </p>
      <span v-if="options && options.showJoinLink" v-on:click="join" class="card-link clickable">Join Community</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'community',
  
  props: [ 'community', 'options' ],

  methods: {
    join() {
      axios.put(`/api/join/${this.community._id}`, this.community)
        .then(res => {
          this.$store.commit('setUser', res.data.user)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },

  filters: {
    excerpt(value) {
      return value.substr(0, 100) + '...'
    }
  }
}
</script>
