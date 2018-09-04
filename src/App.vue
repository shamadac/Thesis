<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/dashboard">Dashboard</router-link>
            <router-link class="nav-item nav-link" to="/messages">Messages</router-link>
            <router-link class="nav-item nav-link" to="/notifications">Notifications</router-link>
            <router-link class="nav-item nav-link" to="/login">Login</router-link>
            <router-link class="nav-item nav-link" to="/register">Register</router-link>
          </div>
        </div>
      </nav>
    </header>
    
    <main>
      <div id="wrapper">
        <div class="container">
          <router-view/>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import './styles/main.scss';
</style>
