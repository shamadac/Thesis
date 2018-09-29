<template>
  <div class="submit">

    <form v-on:submit.prevent="submitForm" class="form-horizontal" novalidate>
      <fieldset>

      <!-- Form Name -->
        <legend class="text-center">Submit a manuscript</legend>

        <form-errors :errors="errors"></form-errors>

        <hr>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-12 control-label" for="title">Title</label>  
          <div class="col-md-12">
            <input v-model="submission.title" id="title" name="title" type="text" placeholder="" class="form-control input-md" required="">
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-12 control-label" for="keywords">Description</label>  
          <div class="col-md-12">
            <input v-model="submission.description" id="keywords" name="keywords" type="text" placeholder="Write a short description about your submission" class="form-control input-md" required="">
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-12 control-label" for="keywords">Keywords</label>  
          <div class="col-md-12">
            <input v-model="submission.keywords" id="keywords" name="keywords" type="text" placeholder="Separate keywords with a comma" class="form-control input-md" required="">
          </div>
        </div>

        <div class="form-group pb-5">
          <label for="community" class="col-md-12 control-label">Community</label>
          <div class="col-md-12">
            <select v-model="submission.community" class="form-control" id="community">
              <option value="">Choose a community</option>
              <option v-for="(community, key) in communities" :key="key" :value="community._id">{{ community.title }}</option>
            </select>
          </div>
        </div>

        <div class="form-group manuscript-body">
          <label class="col-md-12 control-label" for="body">Manuscript Body</label>
          <div class="col-md-12">
            <textarea v-model="submission.body" name="body" id="body" class="form-control input-md"></textarea>
          </div>
        </div>

        <hr>

        <div class="text-center">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import formsMixin from '../mixins/forms'
import dummyMixin from '../mixins/dummy'

const config = {
  name: 'submission',

  mixins: [ formsMixin ],

  computed: {
    communities() {
      return this.$store.state.community
    }
  },

  methods: {
    submitForm() {
      axios.post('/api/submission', this.submission)
        .then(() => {
          this.$router.push({ path: '/profile' })
          this.$store.dispatch('updateAlert', {
            type: 'success',
            message: 'Your manuscript was submitted!'
          })
        })
        .catch(() => {
          this.$store.dispatch('updateAlert', {
            type: 'error',
            message: 'Unable to submit a manuscript at this time, please try again later.'
          })
        })
    }
  }
}

if(dummyMixin) {
  config.mixins.push(dummyMixin)
}

export default config
</script>
