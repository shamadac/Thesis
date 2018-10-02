<template>
  <div class="register">
    <form id="register-form" class="form-horizontal" v-on:submit.prevent="submitForm" novalidate>
      <fieldset>

        <!-- Form Name -->
        <legend class="text-center">Register</legend>

        <form-errors :errors="errors"></form-errors>

        <hr>

        <div class="row">
          <div class="col-md-6">
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="firstname">First Name</label>  
              <div class="col-md-12">
                <input v-model="register.firstname" :class="{ error: errors.firstname }" id="firstname" name="firstname" type="text" placeholder="First Name" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="lastname">Last Name</label>  
              <div class="col-md-12">
                <input v-model="register.lastname" :class="{ error: errors.lastname }" id="lastname" name="lastname" type="text" placeholder="Last Name" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="email">Email Address</label>  
              <div class="col-md-12">
                <input v-model="register.email" :class="{ error: errors.email }" id="email" name="email" type="email" placeholder="user@domain.com" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="phone">Phone Number</label>  
              <div class="col-md-12">
                <input v-model="register.phone" id="phone" name="phone" type="text" placeholder="(#)-###-###-####" class="form-control input-md" required="">
              </div>
            </div>


            <div class="form-group">
              <label for="usertype" class="col-md-12 control-label">I am a...</label>
              <div class="col-md-12">
                <select v-model="register.usertype" :class="{ error: errors.usertype }" class="form-control" name="usertype" id="usertype">
                  <option value="">Choose one</option>
                  <option value="member">Member</option>
                  <option value="subscriber">Subscriber</option>
                </select>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="username">Username</label>  
              <div class="col-md-12">
                <input v-model="register.username" :class="{ error: errors.username }" id="username" name="username" type="text" placeholder="Username" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Password input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="password">Password</label>
              <div class="col-md-12">
                <input v-model="register.password" :class="{ error: errors.password }" id="password" name="password" type="password" placeholder="" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Password input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="confirm-password">Confirm Password</label>
              <div class="col-md-12">
                <input v-model="register.confirmPassword" :class="{ error: errors.confirmPassword }" id="confirm-password" name="confirm_password" type="password" placeholder="" class="form-control input-md" required="">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12 control-label" for="credentials">Credentials</label>
              <div class="col-md-12">                     
                <textarea v-model="register.credentials" class="form-control" id="credentials" name="credentials"></textarea>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <div class="text-center">
          <button class="btn btn-primary" type="submit">Register</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import formsMixin from '@/mixins/forms'
import dummyMixin from '@/mixins/dummy'
import axios from 'axios'

export default {
  name: 'register',
  
  mixins: [
    formsMixin,
    dummyMixin
  ],

  // created() {
  //   axios.get('/api/form-data')
  //     .then(res => this.register = res.data)
  // },

  methods: {
    submitForm() {
      axios.post('/api/register', this.register)
        .then(() => {
          this.$router.push({ path: '/dashboard' })
          this.$store.dispatch('updateAlert', {
            type: 'success',
            message: 'You were successfully registered.'
          })
        })
        .catch(err => {
          this.handleError(err)
          this.$store.dispatch('updateAlert', {
            type: 'error',
            message: 'Unable to register at this time; please try again later.'
          })
        })
    }
  }
}
</script>
