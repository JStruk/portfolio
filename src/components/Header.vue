<template>
  <section id="header">
    <header class="flex items-center justify-between p-2 mt-0 fixed w-full text-white">
      <a href="#home" class="font-semibold text-xl opacity-100 hover:text-gray-400">Justin Struk</a>
      <div class="justify-end hidden lg:block">
        <a class="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-gray-400" v-for="(route, index) in routes"
           :key="index" v-bind:href="route.href">
          {{ route.text }}
        </a>
      </div>
      <div class="block lg:hidden">
        <button
            class="flex items-center px-3 py-2 border
            rounded text-gray-400 border-gray-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
    </header>
  </section>
</template>

<script>
import RoutesJson from '../data/routes.json';

export default {
  data() {
    return {
      routes: RoutesJson.Routes,
    };
  },
  name: 'Header.vue',
};
</script>

<style scoped>
</style>