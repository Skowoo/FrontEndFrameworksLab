<template>
  <div class="about">
    <h1>Movie details (id:{{ movieId }})</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const $r = useRoute()

const movieId = computed(() => parseInt($r.params.id as string))
</script>

<style></style>
