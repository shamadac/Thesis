<template>
  <div class="home">
    <div v-show="error" class="error"></div>
    <h1>Landing Page</h1>
  </div>
</template>

<script>

export default {
  name: 'home',

  data: () => ({
    error: ''
  })
}
</script>
