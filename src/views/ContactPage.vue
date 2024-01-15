<template>
  <div>
    <header>
      <TitleBar />
    </header>
    <main>
      <div class="g-recaptcha" data-sitekey="6LdWGk4pAAAAAADfKl0mHSl8HgkjunHXHLztnAkk" @verify="onRecaptchaVerified">
      </div>
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
    const showContactDetails = ref(false);

    const onRecaptchaVerified = (response) => {
      axios.post('/api/verify-recaptcha', { recaptchaResponse: response })
        .then((result) => {
          if (result.data.success) {
            showContactDetails.value = true;
          } else {
            console.error('captcha verification failed');
          }
        })
        .catch((error) => {
          console.error('Error verifying captcha:', error);
        });
    };

    return {
      showContactDetails,
      onRecaptchaVerified,
    };
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
