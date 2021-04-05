<template>
  <div>
    <input v-model="titleFilter" />
    <div v-for="movie in filterBy(movies, titleFilter, 'title')" v-bind:key="movie.id">
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
      </div>
    </div>
  </div>
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
