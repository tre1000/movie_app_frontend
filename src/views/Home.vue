<template>
  <div class="home">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <button v-on:click="showPlot = !showPlot">More info</button>
      <p v-if="showPlot">{{ movie.plot }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      movies: [],
      showPlot: false,
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/api/movies").then((response) => {
        this.movies = response.data;
      });
    }
  }
};
</script>
