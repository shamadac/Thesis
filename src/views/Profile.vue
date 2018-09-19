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
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-2">
            <div class="card-body">
              <h2>Publications</h2>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body">
              <h2>Reviews</h2>
            </div>
          </div>
          <div class="card mb-2">
            <div class="card-body">
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

export default {
  mixins: [ authMixin ],

  computed: {
    user() {
      return this.$store.state.user
    }
  },

  beforeMount() {
    this.$store.dispatch('getData', 'profile')
      .then(res => console.log('getData dispatch', res))
      .catch(err => console.log('getData dispatch', err))
  }
}
</script>
