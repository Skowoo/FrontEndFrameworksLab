<script setup lang="ts">
import { movies } from '../mockup/movies'
</script>

<template>
  <h1>Movie List</h1>
  <RouterLink to="/movies/1">Goto movie details (1)</RouterLink>
  <RouterLink :to="{ name: 'movie-details', params: { id: 1 } }">Goto movie details (1)</RouterLink>

  <div v-for="m in movies">
    {{ m.title }}
  </div>
</template>
