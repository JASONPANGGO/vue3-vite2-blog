<template>
  <nav class="nav">
    <router-link class="nav-item"
                 v-for="item in menus"
                 :to="item.path"
                 :key="item.name">{{item.name}}</router-link>
  </nav>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Navbar',
  setup () {
    const menus = ref([
      {
        name: 'home',
        path: '/'
      },
      {
        name: 'articles',
        path: '/articles'
      }
    ])

    return {
      menus
    }
  }
})
</script>

<style scoped>
.nav {
  background-color: #eee;
  padding: 20px 30px;
}

.nav-item {
  margin: 0 20px;
  cursor: pointer;
}
.nav-item:hover {
  color: #4f6479;
}
</style>
