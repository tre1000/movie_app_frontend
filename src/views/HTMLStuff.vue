<template>
  <div>
    <h1>Heading!</h1>
    <h2>Second Heading!</h2>
    <h3>Third Heading!</h3>
    <h4>Fourth Heading!</h4>
    <h5>Still Going!</h5>
    <h6>How small can we get?!</h6>
    <p>Paragraph sized!</p>
    <small>Even smaller!</small>
    <br />
    <br />
    <h3>Make your selection</h3>
    <div>
      <input type="radio" id="popcorn" name="food" value="popcorn" v-on:click="popcornShrimp = false" />
      <label for="male">Popcorn</label>
      <br />
      <input type="radio" id="shrimp" name="food" value="female" v-on:click="popcornShrimp = false" />
      <label for="female">Shrimp</label>
      <br />
      <input type="radio" id="popcorn shrimp" name="food" value="popcornShrimp" v-model="popcornShrimp" />
      <label for="other">Popcorn Shrimp</label>
      <br />
      <small v-if="popcornShrimp">Huzzah! A person of culture!</small>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      popcornShrimp: false,
      movies: [],
    };
  },
  mounted: function () {
    this.indexMovies;
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
