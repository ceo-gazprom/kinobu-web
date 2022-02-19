import { defineStore } from 'pinia';
import { MoviesApi } from '../server/api/movie';

export const useMovieStore = defineStore('movies', {
  state: () => {
    return {
      movies: []
    }
  },
  actions: {
   async  getMovies() {
      const api = new MoviesApi();
      const movies = await api.getMoviesList()
      this.movies = movies.data;
    }
  }
})