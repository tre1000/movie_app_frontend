<template>
  <div class="edit-movie">
    <form v-on:submit.prevent="updateMovie(movie)">
      <h1>Edit a movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="movie.title" />
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input type="text" class="form-control" v-model="movie.director" />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input type="text" class="form-control" v-model="movie.year" />
      </div>
      <div class="form-group">
        <label>English?:</label>
        <input type="checkbox" class="form-control" v-model="checked" />
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input type="text" class="form-control" v-model="movie.plot" />
      </div>
      <!-- this button isn't doing anything for whatever reason. -->
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
      errors: [],
      checked: false,
    };
  },
  created: function () {
    axios.get("api/movies/" + this.$route.params.id).then((response) => {
      console.log(response.data);
      this.movie = response.data;
      this.checked = this.movie.english;
    });
  },
  methods: {
    updateMovie: function (movie) {
      var params = {
        title: movie.title,
        director: movie.director,
        year: movie.year,
        english: this.checked,
        plot: movie.plot,
      };
      axios
        .patch("/api/movies/" + this.$route.params.id, params)
        .then(() => {
          console.log("Movie edited!");
          console.log(params);
          this.$router.push("/movies/" + this.movie.id);
        })
        .catch((error) => console.log(error.response.data));
    },
  },
};
</script>
