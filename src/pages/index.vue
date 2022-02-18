<script lang="ts">
  import { useMovieStore } from '../store/movies';
  import { defineComponent } from "vue";

export default defineComponent({
    setup() {
    const movies = useMovieStore()

    movies.getMovies();

    return {
      movies
    }
  },
})
</script>
<template>
  <div>
    <Container>
      <Card v-for="movie of movies.movies" :key="movie.id" :title="movie.originalName" :id="movie.id" />
    </Container>
  </div>
</template>