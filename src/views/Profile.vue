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
            <p>John Doe</p>
            <p>{{ $store.state.user.username }}</p>
            <p>user@domain.com</p>
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
import axios from 'axios'
import authMixin from '../mixins/auth'

export default {
  mixins: [ authMixin ],

  mounted() {
    console.log(this)
  }
}
</script>
