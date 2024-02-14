<template>
  <div>
    <header>
      <TitleBar />
    </header>
    <main>
      <div class="card">

        <!-- Display contact details if verification is successful -->


        <ul v-if="showContactDetails" class="contact-details">
          <h1>Contact Details</h1>
          <li><b>Email:</b> {{ email }}</li>
          <li><b>Mobile:</b> {{ phoneNumber }}</li>
          <li><b>Github:</b> <a :href=github>{{ github }} </a></li>
          <li><b>LinkedIn:</b> <a :href=linkedin>{{ linkedin }}</a></li>
        </ul>



        <!-- reCAPTCHA container -->
        <form @submit.prevent="submitForm">
          <div class="g-recaptcha" data-sitekey="6LcMi1UpAAAAAIXCq8X8B-az20bO8oBPtPZiuiD4"></div>
          <button type="submit" class="submit-button">Show Details</button>
        </form>

        <div v-if="!showContactDetails && !recaptchaFailed">Please Complete Recaptcha to View Contact Details</div>

        <div v-if="recaptchaFailed">Recaptcha Not Completed</div>
      </div>
    </main>
  </div>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
import axios from 'axios';
import { defineComponent, ref } from 'vue';

export default {
  name: 'ContactPage',
  components: { TitleBar, defineComponent },
  data() {
    return {
      showContactDetails: false,
      recaptchaFailed: false,
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
          this.recaptchaFailed = false;
          this.email = responseContactdetails.email;
          this.phoneNumber = responseContactdetails.phoneNumber;
          this.github = responseContactdetails.github;
          this.linkedin = responseContactdetails.linkedin;
        } else {
          // Verification failed
          this.recaptchaFailed = true;
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
h1 {
  width: 75%;
  border-bottom: 2px solid #333;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  // border: 1px solid black;
}

.g-recaptcha {
  margin-bottom: 10px;
  justify-content: center;
}

.submit-button {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e0e0e0;
}

.contact-details {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.contact-details li {
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
