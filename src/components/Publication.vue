<template>
  <div class="publication">
    <div class="card text-center">
    <h3>Publications</h3>

      <div v-if="manuscripts.length !== 0">
        <div v-for="(manuscript, key) in manuscripts" :key="key" class="card-body">
          <div class="card-title">
            <h4>{{ manuscript.title }}</h4>
          </div>
          <a href="#" class="text-right">Read More</a>
        </div>
      </div>

      <div v-else>
        You have not published any manuscripts yet.
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: [ 'manuscripts' ]
}
</script>
