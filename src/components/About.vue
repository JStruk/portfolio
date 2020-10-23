<template>
  <section class="about" id="about">
    <div class="bg-gray-700 pt-24 pb-24">

      <div class="md:flex justify-center mt-20 mb-40 ml-10 mr-10 ">

        <div data-aos="slide-right" data-aos-duration="1000" class="md:pl-20 flex md:flex-none pb-12 justify-center md:justify-end md:pr-12 md:w-1/2">
          <img class="rounded-full h-auto border border-black w-1/4 " :src="images.justin"/>
        </div>
        <div data-aos="slide-left" data-aos-duration="1000" class=" text-3xl md:w-1/2 text-justify md:text-left">
          <div class="text-gray-500 w-full">
            <h1 class="font-bold text-white pb-2">About Me</h1>
            <div class="text-base">
              <p>I'm currently a developer at Vehikl. I graduated from Conestoga's SET program in 2020. Outside of
                computers, my hobbies include cars and video games. I drive a modified Genesis Coupe and I am
                currently
                playing Valorant, LoL and Rogue Company.</p>
            </div>
          </div>

          <div class="text-gray-500 pt-12 ">
            <h1 class="font-bold text-white pb-2">Contact Details</h1>
            <div class="text-base">
              <p> Justin Struk </p>
              <p> Kitchener, Ontario </p>
              <a href="mailto:justin@jstruk.com" class="hover:text-blue-400"> justin@jstruk.com </a>
            </div>
          </div>

        </div>
        <div class="w-1/4"></div>
      </div>
    </div>
  </section>
</template>

<script>



export default {
  name: 'about',
  props: [],
  data() {
    return {
      images: {
        justin: require('../assets/img/justin.png'),
      }
    };
  },
  methods: {},
  computed: {},
  components: {},
  created(){
  }
};
</script>

<style>
</style>