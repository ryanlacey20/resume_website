<!-- ContactPage.vue -->
<template>
  <div>
    <header>
      <TitleBar />
    </header>
    <main>
      <!-- reCAPTCHA container -->
      <form @submit.prevent="submitForm">
        <div class="g-recaptcha" data-sitekey="6LcMi1UpAAAAAIXCq8X8B-az20bO8oBPtPZiuiD4"></div>
        <button type="submit">Submit</button>
      </form>
      <!-- Display contact details if verification is successful -->
      <ul v-if="showContactDetails">
        <li>Placeholder</li>
      </ul>
    </main>
  </div>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
import axios from 'axios';

export default {
  name: 'ContactPage',
  components: { TitleBar },
  setup() {
    const endpoint = "https://resume-website-backend-193de0e3770e.herokuapp.com/api/verify-recaptcha"
    // const endpoint = "http://httpbin.org/post"
    // const endpoint = 'http://localhost:3000/api/verify-recaptcha '
    return {
      endpoint,
    };
  },
  data() {
    return {
      showContactDetails: false,
    };
  },
  methods: {
    async submitForm() {
      const recaptchaResponse = await grecaptcha.getResponse();
      try {
        const response = await axios.post(this.endpoint, {
          recaptchaResponse,
        });

        if (response.data.success) {
          // Verification successful, show contact details
          this.showContactDetails = true;
        } else {
          // Verification failed
          console.error('Captcha verification failed', response.data);
        }
      } catch (error) {
        console.error('Error verifying captcha:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  border: 1px solid black;
}
</style>


