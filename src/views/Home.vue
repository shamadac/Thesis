<template>
  <div class="home">
    <div v-show="error" class="error"></div>
    <h1 class="heading">A JOURNAL THAT PAYS SCIENTISTS</h1>
    <h4 class="heading">Quality science x Transparent Peer-review</h4>
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
