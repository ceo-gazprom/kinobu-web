<template>
  <div class="card__wrapper">
    <div class="card__inner">
      <img src="/img/movie-poster-placeholder.png" width="128"/>
      <div class="card__title">
        {{ title }}
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: null
    },
    id: {
      type: Number,
    }
  },
  setup(props) {
    return { name: props.name };
  }
})
</script>
<style lang="sass">
.card__wrapper
  border: 1px solid var(--card-border)
  position: relative
  border-radius: 3px
  float: left
  margin-right: 20px
  margin-bottom: 18px
  background: var(--card-bg)
  text-decoration: none
  color: var(--card-color)


.card:last-child 
  margin-right: 0px


.card__cover img 
  border-top-left-radius: 3px
  border-top-right-radius: 3px
  -o-object-fit: cover
     object-fit: cover
  height: 100%


.date 
  position: absolute
  padding: 5px 9px
  background: rgba(50, 50, 50, 0.85)
  font-size: 13px
  color: #fff
  bottom: 15%
  right: 0
  border-top-left-radius: 2px
  border-bottom-left-radius: 2px


.rate 
  position: absolute
  top: 20px
  left: 0
  background: #e5bc00
  color: #715f0c
  font-size: 14px
  padding: 5px 9px
  border-top-right-radius: 2px
  border-bottom-right-radius: 2px
  text-align: left


.wait 
  position: absolute
  top: 20px
  left: 0
  background: #1da8f4
  color: #146592
  font-size: 14px
  padding: 5px 9px
  border-top-right-radius: 2px
  border-bottom-right-radius: 2px
  text-align: left


.card .title 
  padding: 10px
  width: 158px
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  font-size: 13px
  text-align: center
  font-weight: 500


.card__cover 
  height: 262px
  overflow: hidden
</style>