<template>
  <section id="hero">
    <vue-headful
        title="Justin Struk"
    />
    <div id="home" class="h-screen justify-center flex">
      <transition appear appear-active-class="fade-enter-active">
        <div class="flex items-center -mt-24">
<!--          <div class="pb-4">-->
<!--            <img-->
<!--              class="rounded-full border border-black"-->
<!--              :src="images.justin"-->
<!--            />-->
<!--          </div> -->
          <div>
            <div class="lg:ml-4 justify-center  lg:text-6xl text-3xl">
              <a class="text-white font-bold mb-2 justify-center flex">Hi! I'm Justin.</a>
              <p class="text-white">Welcome to my website.</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import SocialLinksJson from '../data/socials.json';

export default {
  name: 'Hero.vue',
  data() {
    return {
      images: {
        justin: require('../assets/img/justin.png'),
      },
      showHero: false,
      socials: SocialLinksJson
    };
  },
  methods: {},
  mounted() {
    this.showHero = true;
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: go 3s;
}

@keyframes go {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>