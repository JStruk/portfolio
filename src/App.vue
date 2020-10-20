<template>
  <div class="bg-cover h-screen bg-center"
       :style="{ 'background-image': 'url(' + require('./assets/img/background1.jpg') + ')', }">
    <Header/>
    <Hero/>
    <About class="h-screen"/>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
