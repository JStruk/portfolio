<template>
  <div>
      <div id="main-div" class="md:flex justify-center pt-12 pb-24 bg-gray-600 text-gray-400 ">
        <div id="left-half" data-aos="slide-right" data-aos-duration="1000"
             class="md:pl-20 flex md:flex-none justify-center md:justify-end md:pr-12 md:w-1/2">
          <h2 class="text-3xl text-gray-400 underline"> {{ sectionTitle }}</h2>
        </div>

        <div id="right-half" data-aos="slide-left" data-aos-duration="1000"
             class=" text-3xl md:w-1/2 text-justify md:text-left">
          <h1 class="font-bold text-white pb-2 hover:text-blue-400"><a target="_blank" :href=link>{{ company }}</a></h1>
          <h2 class="text-xl italic">{{ jobTitle }} <span class="text-base"> &bull; </span> {{ dates }}</h2>

          <div class="text-base pt-6">
            <p>{{ description }}</p>
          </div>
            <img class="object-contain pt-10" :src=requireImage(img)>
        </div>
        <div class="w-1/4"></div>
      </div>
    </div>

</template>


<script>

export default {
  name: 'work-event',
  props: {
    sectionTitle: String,
    company: String,
    jobTitle: String,
    dates: String,
    description: String,
    link: String,
    img: String
  },
  data() {
    return {};
  },
  methods: {
    requireImage(imgName) {
      if(!imgName){
        return;
      }
      return require(`../../assets/img/${imgName}`);
    }
  },
};

</script>
