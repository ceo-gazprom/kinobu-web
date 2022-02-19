<template>
  <nav>
    <ul class="nav__list">
      <li class="nav__elemnt" v-for="navItem in navigationItems" :key={navItem.name}>
        <Nuxt-link>
          {{ navItem }}
        </Nuxt-link>
      </li>
      <li>...</li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export interface INavigationItem {
  name: string;
  url: string;
}

const navigationItems: INavigationItem[] = [
  {
    name: 'Новости',
    url: '/news',
  },
  {
    name: 'Фильмы',
    url:'/movie',
  },
  {
    name: 'Сериалы',
    url: '/tvshows',
  },
  {
    name: 'Мультфильмы',
    url: '/cartoons',
  },
  {
    name: 'Расписание',
    url: '/schedule',
  }
];

export default defineComponent({
  setup(navigationItems) {
    return {
      navigationItems
    }
  },
})
</script>

<style lang="sass">

</style>