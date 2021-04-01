<template>
  <div class="new-movie">
    <form v-on:submit.prevent="createMovie()">
      <h1>Create a movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input type="text" class="form-control" v-model="director" />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input type="text" class="form-control" v-model="year" />
      </div>
      <div class="form-group">
        <label>English?:</label>
        <input type="checkbox" class="form-control" v-model="english" />
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input type="text" class="form-control" v-model="plot" />
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
      title: "",
      director: "",
      year: "",
      english: true,
      plot: "",
    };
  },
  created: function () {},
  methods: {
    createMovie: function () {
      var params = {
        title: this.title,
        director: this.director,
        year: this.year,
        english: this.english,
        plot: this.plot,
      };
      axios
        .post("/api/movies", params)
        .then((response) => {
          console.log("Movie added!", response.data);
          this.$router.push("/movies");
        })
        .catch((error) => console.log(error.response.data));
    },
  },
};
</script>
