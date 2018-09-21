<template>
  <div class="card text-center">
    <div class="card-body">
      <div class="card-title">
        <h3>Reviews</h3>
      </div>

      <div v-if="reviews.length !== 0">
        <div v-for="(review, key) in reviews" :key="key" class="card">
          <div class="card-body">
            <div class="card-title">
              <h4>Review #1</h4>
            </div>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>

      <div v-else>
        You have not posted any reviews.
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['reviews']
}
</script>
