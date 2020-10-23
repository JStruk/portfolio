<template>
  <div>
    <div class="bg-gray-600 ">

      <div id="left-half" class="md:flex justify-center pt-24 pb-24 ml-10 mr-10 ">
        <div data-aos="slide-right" data-aos-duration="1000"
             class="md:pl-20 flex md:flex-none justify-center md:justify-end md:pr-12 md:w-1/2">
          <h2 class="text-3xl text-gray-400 underline"> {{ sectionTitle }}</h2>
        </div>

        <div id="right-half" data-aos="slide-left" data-aos-duration="1000"
             class=" text-3xl md:w-1/2 text-justify md:text-left">
          <div class="text-gray-400 w-full">
            <h1 class="font-bold text-white pb-2">{{ company }}</h1>
            <h2 class="text-xl italic">{{ jobTitle }} <span class="text-base"> &bull; </span> {{ dates }}</h2>

            <div class="text-base pt-6">
              <p>{{description}}</p>
            </div>
          </div>
        </div>

        <div class="w-1/4"></div>
      </div>
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
    description: String
  },
  data() {
    return {};
  },
  methods: {},
};

</script>