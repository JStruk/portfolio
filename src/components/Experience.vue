<template>
  <section id='work-experience'>
    <div class="divide-y divide-gray-400">
      <div v-for="section in experiences" :key="section">
        <work-event v-for="lifeEvent in section" :key="lifeEvent"
                    :section-title=lifeEvent.sectionTitle
                    :company=lifeEvent.company
                    :job-title=lifeEvent.jobTitle
                    :dates=lifeEvent.dates
                    :description=lifeEvent.description
                    :link=lifeEvent.link
                    :img=lifeEvent.img>
        </work-event>
      </div>
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
  methods: {
    logMe(lol) {
      console.log(lol);
    }
  },
  mounted() {
    this.$gtag.pageview({
      page_path: '/experience',
    })
  }
};

</script>


<style>

</style>
