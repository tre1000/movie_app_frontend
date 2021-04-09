<template>
  <div>
    <router-link v-bind:to="`/movies/new`">
      <button class="btn btn-outline-primary">Create a new movie</button>
    </router-link>

    <!-- <div>
      <button v-on:click="orderBy('title')">Sort Alphabetically</button>
      <button v-on:click="log()">log</button>
    </div> -->

    <!-- <input v-model="titleFilter" placeholder="search" list="titles" />
    <datalist id="titles">
      <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
    </datalist> -->

    <!-- <div v-for="movie in filterBy(movies, titleFilter, 'title')" v-bind:key="movie.id">
      <div v-if="titleFilter !== ''">
        <div class="row">
          <div class="col-sm-6">
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
      </div> -->
    <!-- <div v-else> -->
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
  <!-- </div> -->
  <!-- </div> -->
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      titleFilter: "",
      alphabetical: false,
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
    log: function () {
      console.log(this.alphabetical);
    },
  },
};
</script>
