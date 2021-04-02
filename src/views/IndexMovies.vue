<template>
  <div>
    <router-link v-bind:to="`movies/new`">
      <button class="btn btn-outline-primary">Create a new movie</button>
    </router-link>

    <div class="row">
      <div v-for="movie in movies" v-bind:key="movie.id" class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.plot }}</p>
            <router-link v-bind:to="`movies/${movie.id}`">
              <a href="#" class="btn btn-outline-primary">More info</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-for="movie in movies" v-bind:key="movie.id">
        <router-link v-bind:to="`movies/${movie.id}`">
          <h1>{{ movie.title }}</h1>
        </router-link>
        <p>{{ movie.year }}</p>
      </div> -->
  <!-- </div>
  </div> -->
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
