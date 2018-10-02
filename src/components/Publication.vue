<template>
  <div class="publication">
    <div class="card mb-2">
      <div class="card-body">
        <h5 class="card-title">
          {{ manuscript.title }}
        </h5>
        <p class="card-text">
          {{ manuscript.description }}
        </p>
        <a href="#" class="card-link">View</a>
        <span class="card-link">{{ manuscript.reviews.length }} Reviews</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'manuscript' ]
}
</script>
