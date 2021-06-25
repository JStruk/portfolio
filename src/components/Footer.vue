<template>
  <section id="footer">
    <div class="w-full flex items-center justify-center bg-gray-500">
        <div v-for="socialLink in socialLinks" :key="socialLink">
          <a :href=socialLink.url target="_blank">
            <fa class="h-10 m-4" :icon=socialLink.className type="fab"></fa>
          </a>
        </div>
    </div>
  </section>
</template>


<script>

import socialLinksJson from '../data/socials.json';

export default {
  data() {
    return {
      socialLinks: socialLinksJson.socialLinks
    }
  }
}

</script>
