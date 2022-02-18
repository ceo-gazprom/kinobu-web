<template>
  <div>
    Добавить фильм :)
    <CreateMovieForm />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CreateMovieForm from '../../components/forms/create-movie.vue'

export default defineComponent({
  components: {
    CreateMovieForm
  },
  setup() {
    
  },
})
</script>
