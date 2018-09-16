<template>
  <div class="form-errors">
    <div v-show="Object.keys(errors).length" class="errors alert alert-danger">
      <h5>Please fix the following errors and try submitting again</h5>
      <ul class="row">
        <li v-for="(error, key) in errors" :key="key" class="col-md-12">
          <strong>{{ key }} </strong> <span v-show="error.message">{{ error.message }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'errors' ]
}
</script>

