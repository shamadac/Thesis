<template>
  <div class="login">
    <form class="form-horizontal">
      <fieldset>

      <!-- Form Name -->
        <legend class="text-center">Login</legend>

        <hr>

        <!-- Text input-->
        <div class="form-group">
          <label class="col-md-12 control-label" for="username">Username or Email</label>  
          <div class="col-md-12">
            <input id="username" name="username" type="text" placeholder="" class="form-control input-md" required="">
          </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
          <label class="col-md-12 control-label" for="password">Password</label>
          <div class="col-md-12">
            <input id="password" name="password" type="password" placeholder="" class="form-control input-md" required="">
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
import formsMixin from '@/mixins/forms'

export default {
  name: 'login',
  mixins: [ formsMixin ]
}
</script>
