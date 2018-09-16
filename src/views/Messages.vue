<template>
  <div class="dashboard">
    <h1>This is the messages page</h1>
  </div>
</template>

<script>
import authMixin from '../mixins/auth'

export default {
  mixins: [ authMixin ],
}
</script>
