<template>
  <div class="dashboard">
    <div class="container">
      <div class="text-center">
        <h2>Welcome, User</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <publication></publication>
        </div>
        <div class="col-md-6">
          <review></review>
        </div>
        <div class="col-md-6">
          <community></community>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import publication from '../components/Publication.vue'
import review from '../components/Review.vue'
import community from '../components/Community.vue'

export default {
  components: {
    publication,
    review,
    community
  }
}
</script>
