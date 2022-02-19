<template>
  <div class="movie-card__wrapper">
    <div class="movie-card__inner">
      <div class="movie-card__poster-wrapper">
        <img :src={props.}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineProps, toRef } from 'vue';

interface CardProps {
  title: string;
  originalTitle: string;
  poster: string;
  year: number;
  rating: number;
  waiting: number;
}

const props = defineProps<CardProps>()

export default defineComponent({
  name: 'Card',
  setup(props) {
    return {
      props
    }
  }
})
</script>
<style lang="sass">

</style>