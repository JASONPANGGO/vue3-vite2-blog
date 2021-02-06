<template>
  <h1>
    {{title}}
  </h1>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const title = ref('Home')
    return {
      title
    }
  }
})
</script>

<style>

</style>