<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <div class="logo">
            <img src="./assets/images/logo.png" alt="logo">
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link v-show="!isLoggedIn" class="nav-item nav-link" to="/" exact>Home</router-link>
            <router-link v-show="isLoggedIn" class="nav-item nav-link" to="/dashboard">Dashboard</router-link>
            <!-- <router-link v-show="isLoggedIn" class="nav-item nav-link" to="/messages">Messages</router-link> -->
            <!-- <router-link v-show="isLoggedIn" class="nav-item nav-link" to="/notifications">Notifications</router-link> -->
            <router-link v-show="!isLoggedIn" class="nav-item nav-link" to="/login">Login</router-link>
            <router-link v-show="!isLoggedIn" class="nav-item nav-link" to="/register">Register</router-link>
            <span v-show="isLoggedIn" v-on:click="logout" id="logout" class="clickable nav-item nav-link">Logout</span>
            <button v-show="isLoggedIn" @click="$router.push({ path: '/submit' })" type="button" class="btn btn-sm btn-primary">Submit a manuscript</button>
          </div>
        </div>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search for a paper..." aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <span class="navbar-text">
          <router-link v-show="isLoggedIn" class="nav-item nav-link" to="/profile">Profile</router-link>
        </span>
      </nav>
    </header>
    
    <main>
      <div id="wrapper">
        <div class="container">

          <div v-show="error" class="alert alert-danger">{{ error }}</div>

          <div v-show="success" class="alert alert-success">{{ success }}</div>

          <router-view/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    error() {
      return this.$store.state.error
    },
    success() {
      return this.$store.state.success
    }
  },

  methods: {

    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ path: '/' })
          this.$store.dispatch('updateAlert', {
            type: 'success',
            message: 'You were successfully logged out.'
          })
        })
        .catch(() => {
          this.$store.dispatch('updateAlert', {
            type: 'error',
            message: 'You could not be logged out at this time; please try again later.'
          })
        })
    }
  }
}
</script>


<style lang="scss">
  @import './styles/main.scss';
</style>
