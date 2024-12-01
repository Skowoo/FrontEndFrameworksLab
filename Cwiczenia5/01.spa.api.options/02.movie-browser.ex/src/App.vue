<template>
  <div class="container">
    <template v-if="!selectedMovie">
      <h1>Movie list ({{ filteredMovies.length }})</h1>
      <label class="mb-4">
        Search
        <input v-model="search" class="form-control" />
      </label>
      <div class="list">
        <div
          class="card w-100 mb-4"
          v-for="(m, idx) in filteredMovies"
          :key="m.movieId"
        >
          <div class="row g-0">
            <div class="col-md-3">
              <img
                :src="`/movies/movie_${m.movieId}.png`"
                class="img-fluid rounded-start"
                alt="m.title"
              />
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <h2 class="card-title">{{ idx + 1 }}. {{ m.title }}</h2>
                <p class="card-subtitle mb-2 text-body-secondary">
                  Author: {{ m.author }}
                </p>
                <p class="card-subtitle mb-2 text-body-secondary">
                  Duration: {{ m.length_minutes }} minutes
                </p>
                <p class="card-text">
                  {{ m.content }}
                </p>
                <a
                  href="#"
                  class="btn btn-primary mb-3 mt-3"
                  @click.prevent="selectedMovie = m"
                  >Show details »</a
                >
              </div>
            </div>
          </div>
          <div class="card-footer text-body-secondary">
            Released on: {{ formatDate(m.publish_date) }}
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <a
        href="#"
        @click.prevent="selectedMovie = null"
        class="btn btn-primary mb-3 mt-3"
        >« Go back</a
      >
      <div class="card">
        <!-- <div
          :style="{
            'min-height': '300px',
            'background-image': `url('/movies/movie_${selectedMovie.movieId}.png')`,
            'background-position': 'center',
          }"
        ></div> -->

        <div class="card-body">
          <h1>{{ selectedMovie.title }}</h1>
          <p>Author: {{ selectedMovie.author }}</p>
          <p>{{ selectedMovie.summary }}</p>
          <p>{{ selectedMovie.description }}</p>
        </div>
        <img
          :src="`/movies/movie_${selectedMovie.movieId}.png`"
          class="card-img-bottom"
          alt="selecteMovie.title"
        />
      </div>
    </template>
  </div>
</template>

<script>
import movies from "./mockup/movies";

export default {
  created() {
    this.dateFormatter = Intl.DateTimeFormat().format;
  },
  data() {
    return {
      search: "",
      movies,
      selectedMovie: null,
    };
  },
  computed: {
    hasSearch() {
      return (this.search?.length ?? 0) > 0;
    },
    filteredMovies() {
      return this.movies.filter(
        (a) =>
          a.title
            .toLocaleLowerCase()
            .includes(this.search.toLocaleLowerCase()) || !this.hasSearch
      );
    },
  },
  methods: {
    formatDate(date) {
      return this.dateFormatter(date);
    },
  },
};
</script>

<style scoped></style>
