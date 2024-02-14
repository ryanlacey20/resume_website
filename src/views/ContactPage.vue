<template>
  <div>
    <header>
      <TitleBar />
    </header>
    <main>
      <!-- reCAPTCHA container -->
      <div id="recaptcha-container"></div>
      <form @submit.prevent="submitForm">
        <div class="g-recaptcha" data-sitekey="6LcMi1UpAAAAAIXCq8X8B-az20bO8oBPtPZiuiD4"></div>
        <button type="submit">Submit</button>
      </form>
      <!-- Display contact details if verification is successful -->
      <ul v-if="showContactDetails">
        <li>Email: {{ email }}</li>
        <li>Mobile: {{ phoneNumber }}</li>
        <li>Github: {{ github }}</li>
        <li>LinkedIn: {{ linkedin }}</li>
      </ul>
    </main>
  </div>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'ContactPage',
  components: { TitleBar },
  data() {
    return {
      showContactDetails: false,
      email: ref(''),
      phoneNumber: ref(''),
      github: ref(''),
      linkedin: ref(''),
    };
  },
  mounted() {
    // Ensure the reCAPTCHA script is fully loaded before rendering the widget
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';

    document.head.appendChild(script);
  },
  methods: {
    async submitForm() {
      const recaptchaResponse = await grecaptcha.getResponse();
      try {
        const response = await axios.post("https://resume-website-backend-193de0e3770e.herokuapp.com/api/verify-recaptcha", {
          recaptchaResponse,
        });

        if (response.data.success) {
          // Verification successful, show contact details
          const responseContactdetails = response.data.contactDetails
          console.log('response data here:', responseContactdetails)
          this.showContactDetails = true;
          this.email = responseContactdetails.email;
          this.phoneNumber = responseContactdetails.phoneNumber;
          this.github = responseContactdetails.github;
          this.linkedin = responseContactdetails.linkedin;
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
#recaptcha-container {
  justify-content: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


/* Your scoped styles */
</style>
