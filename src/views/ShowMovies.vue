<template>
  <div id="show-movies">
    <h1>{{ movie.title }}</h1>
    <h2>{{ movie.director }}</h2>
    <h3>{{ movie.year }}</h3>
    <h3>English?</h3>
    <p>{{ movie.english }}</p>
    <h3>Plot:</h3>
    <p>{{ movie.plot }}</p>
    <router-link v-bind:to="`/movies/${movie.id}/edit`">
      <button>Edit movie</button>
    </router-link>
    <button v-on:click="destroyMovie(movie)">Destroy movie</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    this.showMovie();
  },
  methods: {
    showMovie: function () {
      axios.get("/api/movies/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.movie = response.data;
      });
    },
    destroyMovie: function (movie) {
      axios.delete("api/movies/" + movie.id).then(() => {
        console.log("Destroyed!");
        this.$router.push("/movies");
      });
    },
  },
};
</script>
