<template>
  <div class="login">
    <form v-on:submit.prevent="submitForm" class="form-horizontal" novalidate>
      <fieldset>

      <!-- Form Name -->
        <legend class="text-center">Login</legend>

        <hr>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-12 control-label" for="username">Username or Email</label>  
          <div class="col-md-12">
            <input v-model="login.username" id="username" name="username" type="text" placeholder="" class="form-control input-md" required="">
          </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
          <label class="col-md-12 control-label" for="password">Password</label>
          <div class="col-md-12">
            <input v-model="login.password" id="password" name="password" type="password" placeholder="" class="form-control input-md" required="">
          </div>
        </div>

        <hr>

        <div class="text-center">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>
      </fieldset>
    </form>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import formsMixin from '@/mixins/forms'
import dummyMixin from '@/mixins/dummy'

export default {
  name: 'login',
  
  mixins: [
    formsMixin,
    dummyMixin
  ],

  created() {
    axios.get('/api/form-data')
      .then(res => this.login = res.data)
  },

  methods: {
    submitForm() {
      axios.post('/api/login', this.login)
        .then(res => {
          this.$router.push({ path: '/dashboard' })
        })
        .catch(err => this.handleError(err))
    }
  }
}
</script>
