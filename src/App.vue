<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>
      |
      <router-link to="/movies">Movies</router-link>
      |
      <router-link to="/signup">Sign up</router-link>
      |
      <router-link to="/login">Log in</router-link>
      |
      <router-link to="/logout">Log out</router-link>
      |
      <router-link to="/about">About</router-link> -->
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/movies" class="nav-link">Movies</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/html_stuff" class="nav-link">HTML Stuff</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/signup" class="dropdown-item" v-if="!isLoggedIn()">Sign up</router-link>
              <router-link to="/login" class="dropdown-item" v-if="!isLoggedIn()">Log in</router-link>
              <div class="dropdown-divider"></div>
              <router-link to="/logout" class="dropdown-item" v-if="isLoggedIn()">Log out</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <router-link v-bind:to="`/movies/search`">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </router-link>
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
