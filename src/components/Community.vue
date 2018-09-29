<template>
  <div class="card community mb-2">
    <div class="card-body">
      <h5 class="card-title">{{ community.title }}</h5>
      <p class="card-text">
        {{ community.description | excerpt }} <span class="clickable">Read More</span>
      </p>
      <span @click="join" class="card-link clickable">Join Community</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'community',
  
  props: [ 'community' ],

  methods: {
    join() {
      axios.put('/api/join', this.community)
        .then(res => {
          console.log(res)
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
