<template>
  <div>
    <header>

      <TitleBar />
    </header>
    <main>
      <!-- Button to initiate reCAPTCHA verification -->
      <button @click="executeRecaptcha">Verify</button>

      <!-- Display contact details if verification is successful -->
      <ul v-if="showContactDetails">
        <li>E-Mail: ryanpatricklacey@gmail.com</li>
        <li>LinkedIn: <a
            href="https://www.linkedin.com/in/ryanpatricklacey/">https://www.linkedin.com/in/ryanpatricklacey/</a></li>
        <li>GitHub: <a href="https://github.com/ryanlacey20">https://github.com/ryanlacey20</a></li>
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
  setup() {
    // Reactive variable to control the visibility of contact details
    const showContactDetails = ref(false);

    // Backend endpoint where reCAPTCHA verification will be sent
    const endPoint = "http://localhost:3000/";

    // Function to execute reCAPTCHA verification
    const executeRecaptcha = () => {
      // Use grecaptcha.execute to trigger reCAPTCHA verification
      grecaptcha.execute('6LcMi1UpAAAAAIXCq8X8B-az20bO8oBPtPZiuiD4', { action: 'submit' })
        .then((response) => {
          // Once reCAPTCHA is verified, call the handler
          onRecaptchaVerified(response);
        });
    };

    // Handler for reCAPTCHA verification result
    const onRecaptchaVerified = (response) => {
      console.log('Verification successful');

      // Send the verification response to your backend
      axios.post(endPoint, { recaptchaResponse: response })
        .then((result) => {
          if (result.data.success) {
            // If backend verification is successful, show the contact details
            showContactDetails.value = true;
          } else {
            // If backend verification fails, log an error
            console.error('Captcha verification failed');
          }
        })
        .catch((error) => {
          // Handle errors from the verification process
          console.error('Error verifying captcha:', error);
        });
    };

    // Expose variables and functions to the template
    return {
      showContactDetails,
      executeRecaptcha,
      onRecaptchaVerified,
    };
  },
};
</script>

<style lang="scss" scoped>
/* Your global styles */
li {
  list-style: none;
  border: 1px solid black;
}

/* Additional styles for g-recaptcha if needed */
g-recaptcha {
  border: 1px solid black;
}
</style>
