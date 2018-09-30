<template>
  <div class="home">
    <div v-show="error" class="error"></div>
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
