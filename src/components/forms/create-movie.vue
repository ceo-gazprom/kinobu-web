<template>
  <form>
    <div>
      <div>
        titile: <input />
        year: <input />
        poster: <input />
      </div>
      <div>
        <input type="file" accept="image/*" @change="onPosterChange">
        <div id="preview">
          <img :src="url" />
        </div>
      </div>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const url: string = '';
    return {
      url,
    }
  },
  methods: {
    onPosterChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file)
      console.log(this.url)
    }
  }
})
</script>