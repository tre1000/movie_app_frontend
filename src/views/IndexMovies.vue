<template>
  <div id="index-movies">
    <router-link v-bind:to="`movies/new`">
      <button>Create a new movie</button>
    </router-link>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <router-link v-bind:to="`movies/${movie.id}`">
        <h1>{{ movie.title }}</h1>
      </router-link>
      <p>{{ movie.year }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/api/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
};
</script>
