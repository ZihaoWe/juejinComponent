<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import hotList from './components/hotList.vue';
</script>

<template>
  <header>
      <HelloWorld />
  </header>
  <main class="flex justify-center mt-8 mx-8">
    <hotList/>
  </main>
</template>

<style scoped>

</style>
