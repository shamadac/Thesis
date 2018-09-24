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
          <label class="col-md-12 control-label" for="keywords">Keywords</label>  
          <div class="col-md-12">
            <input v-model="submission.keywords" id="keywords" name="keywords" type="text" placeholder="Separate keywords with a comma" class="form-control input-md" required="">
          </div>
        </div>

        <div class="form-group">
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

  methods: {
    submitForm() {
      axios.post('/api/submission', this.submission)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

if(dummyMixin) {
  config.mixins.push(dummyMixin)
}

export default config
</script>
