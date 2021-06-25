<template>
  <section id='work-experience'>
    <div id="main-div" class="flex flex-col justify-center pt-12 pb-24 bg-gray-500 text-gray-400 ">
      <div class="text-3xl text-gray-700 mb-2 underline"> Contact Me</div>
      <div class="flex justify-center">
        <form class="w-full max-w-lg m-4" @submit.prevent="submit" @reset="onReset">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
                First Name
              </label>
              <input
                  class="appearance-none block w-full bg-gray-400 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300"
                  id="first-name" type="text" placeholder="Jane" v-model="firstName">
              <!--              <p v-if="!this.formValid" class="text-red-500 text-xs italic">Please fill out this field.</p>-->
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
                Last Name
              </label>
              <input
                  class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                  id="last-name" type="text" placeholder="Doe" v-model="lastName">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                E-mail
              </label>
              <input
                  class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                  id="email" type="email" v-model="email">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <textarea
                  class=" no-resize appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-300 focus:border-gray-500 h-48 resize-none"
                  id="message" v-model="message"/>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
                class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>


<script>
import emailjs from 'emailjs-com'

export default {
  name: 'contact',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
  },
  computed: {
    formValid() {
      const {firstName, lastName, email, message} = this;
      return (
          firstName.length > 0 &&
          lastName.length > 0 &&
          /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
          message.length > 0
      );
    },
  },
  methods: {
    onReset() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.message = '';
    },
    async submit() {
      if (!this.formValid) {
        this.$wkToast('Please fill out the contact form correctly', {
          className: 'wk-alert',
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: '5000',
          closeable: true
        })
        return;
      }
      const emailParams = {
        to_name: 'Justin Struk',
        from_name: `${ this.firstName } ${ this.lastName }`,
        reply_to: this.email,
        message: this.message
      }
      console.log({
        service: process.env.VUE_APP_EMAILJS_SERVICE_ID, template: process.env.VUE_APP_EMAILJS_TEMPLATE_ID, user: process.env.VUE_APP_EMAILJS_USER_ID
      });
      await emailjs.send(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, emailParams, process.env.VUE_APP_EMAILJS_USER_ID)
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.$wkToast('Email sent, thank you!', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: '5000',
              closeable: true,
            });
            this.onReset();
          }, (error) => {
            this.$wkToast('Unable to send email. Please try again.', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: '5000',
              closeable: true,
            });
          });
    }
  },
};
</script>


<style>

</style>
