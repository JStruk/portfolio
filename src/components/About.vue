<template>
  <section class="about" id="about">
    <div class="bg-gray-700 lg:h-screen pt-24">
      <div class="md:flex justify-center mt-20 mb-40 ml-10 mr-10 ">
        <div class="md:pl-20 flex md:flex-none justify-center p-4">
          <img class="rounded-full border border-black w-1/2 " :src="images.justin"/>
        </div>

        <div class=" md:-ml-20 text-3xl lg:w-1/2 text-justify md:text-left">
          <div class="text-gray-500 w-full">
            <h1 class="font-bold text-white pb-2">About Me</h1>
            <div class="text-base">
              <p>I'm currently a developer at Vehikl. I graduated from Conestoga's SET program in 2020. Outside of
                computers, my hobbies include cars and video games. I drive a modified Genesis Coupe and I am currently
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
};
</script>