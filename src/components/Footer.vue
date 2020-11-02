<template>
  <section id="footer">
    <div class="w-full flex">

      <ul>
<!--        <li v-for="socialLink in socialLinks" :key="socialLink">-->
<!--          {{socialLink.name}}-->
<!--          <a :href=socialLink.url>-->
<!--            <v-icon>mdi-github</v-icon>-->
<!--          </a>-->

<!--        </li>-->
        <li>

        </li>
      </ul>

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