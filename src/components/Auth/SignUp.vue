<template>
  <div class="card">
    <h2>SignUp</h2>
    <form @submit.prevent="createUser">
      <div class="input-group">
        <input type="text" id="signupEmail" v-model="email" placeholder="Email" required>
      </div>
      <div class="input-group">
        <input type="password" id="signupPassword" v-model="password" placeholder="Password" required>
      </div>
      <div class="input-group">
        <input type="password" id="signupVerifyPassword" v-model="verifyPassword" placeholder="Re-enter Password"
          required>
      </div>
      <button type="submit">Sign Up</button>
    </form>

    <div v-if="showEmailInUsePopup" class="popup">
      <p>Email is already in use.</p>
    </div>
    <div v-if="showSuccessPopup" class="popup">
      <p>SignUp successful!</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

export default {
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const verifyPassword = ref('');
    const auth = getAuth();
    const showEmailInUsePopup = ref(false); // Corrected: added `ref` and fixed typo
    const showSuccessPopup = ref(false);

    //log authorisation info on open
    console.log("Authoristation status:", auth)

    //reroute home if already logged in
    const navigateHomeIfAuthenticated = () => {
      if (auth.currentUser != null) {
        router.push('/'); // Replace '/another-page' with the route you want to navigate to
      }
    };

    // createUser function
    const createUser = async () => {
      try {
        if (password.value !== verifyPassword.value) {
          throw new Error('Passwords do not match');
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        console.log('User signed up:', user);
        // signup success code
        showEmailInUsePopup.value = true;

      } catch (error) {
        console.error('Error signing up:', error.message);
        if (error.code === 'auth/email-already-in-use') {
          showEmailInUsePopup.value = true;
          setTimeout(() => {
            showEmailInUsePopup.value = false;
          }, 5000); // Close the popup after 3 seconds
        }
      }
    };

    // Call the function when component is mounted
    navigateHomeIfAuthenticated();

    return { email, password, verifyPassword, createUser, showEmailInUsePopup, showSuccessPopup }; // Corrected: added `showEmailInUsePopup`
  }
}
</script>


<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 50%;
}

button {
  padding: 10px;
  background-color: #aed9e0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 53.5%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
}

button:hover {
  background-color: #8ab7bd;
}
</style>
