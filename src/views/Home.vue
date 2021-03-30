<template>
  <div class="home">
    <div>
      <h1>Create A New Movie!</h1>
      <p>Title:</p>
      <input type="text" v-model="movieTitle" />
      <p>Year:</p>
      <input type="text" v-model="movieYear" />
      <p>Plot:</p>
      <input type="text" v-model="moviePlot" />
      <p>Director:</p>
      <input type="text" v-model="movieDirector" />
      <p>English?:</p>
      <input type="checkbox" v-model="movieEnglish" true-value="true" false-value="false" />
      <br />
      <button v-on:click="createMovie()">Create!!!</button>
    </div>

    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <button v-on:click="showMovie(movie)">More Info</button>

      <dialog id="movie-details">
        <form method="dialog">
          <p>Title:</p>
          <input type="text" v-model="currentMovie.title" />
          <p>Year:</p>
          <input type="text" v-model="currentMovie.year" />
          <p>Plot:</p>
          <input type="text" v-model="currentMovie.plot" />
          <br />
          <p>{{ currentMovie.plot }}</p>
          <button v-on:click="updateMovie(currentMovie)">Update</button>
          <button>Back</button>
          <button v-on:click="showDestroyConfirmation()">Delete</button>
        </form>
      </dialog>

      <dialog id="movie-updated">
        <form method="dialog">
          <button>Sweet. Show me more stuff.</button>
        </form>
      </dialog>

      <dialog id="delete-confirmation">
        <form method="dialog">
          <p>Are you sure you want to delete this movie?</p>
          <button v-on:click="destroyMovie(currentMovie)">Yes</button>
          <button>No</button>
        </form>
      </dialog>

      <!-- <dialog id="movie-create-form">
        <form method="dialog">
          <p>Title:</p>
          <input type="text" v-model="movieTitle" />
          <p>Year:</p>
          <input type="text" v-model="movieYear" />
          <p>Plot:</p>
          <input type="text" v-model="moviePlot" />
          <p>Director:</p>
          <input type="text" v-model="movieDirector" />
          <p>English?:</p>
          <input type="checkbox" v-model="movieEnglish" true-value="true" false-value="false">
          <button v-onclick="createMovie()">Create!!!</button>
          <button>Nevermind.</button>
        </form>
      </dialog> -->
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
      currentMovie: "",
      movieTitle: "",
      movieYear: "",
      moviePlot: "",
      movieDirector: "",
      movieEnglish: true,
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
    },
    showMovie: function (movie) {
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      var params = {
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
      };
      axios.patch("/api/movies/" + movie.id, params).then((response) => {
        console.log("success!", response.data);
        document.querySelector("#movie-updated").showModal();
      });
    },
    createMovie: function () {
      var params = {
        title: this.movieTitle,
        year: this.movieYear,
        plot: this.moviePlot,
        director: this.movieDirector,
        english: this.movieEnglish,
      };
      axios
        .post("/api/movies", params)
        .then((response) => {
          console.log("success!", response.data);
          this.movies.push(response.data);
        })
        .catch((error) => console.log(error.response.data));
      this.currentMovie = "";
      this.movieTitle = "";
      this.movieYear = "";
      this.moviePlot = "";
      this.movieDirector = "";
    },
    destroyMovie: function (movie) {
      axios.delete("api/movies/" + movie.id).then((response) => {
        console.log("Movies destroy", response);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
    showDestroyConfirmation: function () {
      document.querySelector("#delete-confirmation").showModal();
    },
  },
};
</script>
