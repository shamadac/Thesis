<template>
  <div class="register">
    <form class="form-horizontal">
      <fieldset>

        <!-- Form Name -->
        <legend class="text-center">Register</legend>

        <hr>

        <div class="row">
          <div class="col-md-6">
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="firstname">First Name</label>  
              <div class="col-md-12">
                <input id="firstname" name="firstname" type="text" placeholder="First Name" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="lastname">Last Name</label>  
              <div class="col-md-12">
                <input id="lastname" name="lastname" type="text" placeholder="Last Name" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="email">Email Address</label>  
              <div class="col-md-12">
                <input id="email" name="email" type="email" placeholder="user@domain.com" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="username">Username</label>  
              <div class="col-md-12">
                <input id="username" name="username" type="text" placeholder="Username" class="form-control input-md" required="">
              </div>
            </div>

            <!-- Password input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="password">Password</label>
              <div class="col-md-12">
                <input id="password" name="password" type="password" placeholder="" class="form-control input-md" required="">
              </div>
            </div>
          </div>

          <!-- Textarea -->
          <div class="col-md-6">

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-12 control-label" for="phone">Phone Number</label>  
              <div class="col-md-12">
                <input id="phone" name="phone" type="text" placeholder="(#)-###-###-####" class="form-control input-md" required="">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12 control-label" for="credentials">Credentials</label>
              <div class="col-md-12">                     
                <textarea class="form-control" id="credentials" name="credentials"></textarea>
              </div>
            </div>

            <!-- Textarea -->
            <div class="form-group">
              <label class="col-md-12 control-label" for="communities">Communities</label>
              <div class="col-md-12">                     
                <textarea class="form-control" id="communities" name="communities"></textarea>
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

export default {
  name: 'register',
  mixins: [ formsMixin ]
}
</script>
