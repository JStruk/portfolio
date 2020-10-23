<template>
  <section id='work-experience'>

    <div class="">

      <work-event v-for="experience in experiences" :key="experience"
      :section-title="experience.sectionTitle"
      :company="experience.company"
      :job-title="experience.jobTitle"
      :dates="experience.dates"
      :description="experience.description">
      </work-event>
    </div>

    </section>
</template>


<script>

import WorkEvent from '@/components/WorkComponents/WorkEvent';
import experienceJson from '../data/experience.json';

export default {
  name: 'experience',
  components: {
    WorkEvent
  },
  props: [],
  data() {
    return {
      experiences: experienceJson
    };
  },
  methods: {},
};

</script>


<style>

</style>