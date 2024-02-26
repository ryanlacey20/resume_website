<template>
  <div class="card">
    <h2>SignUp</h2>
    <form @submit.prevent="SignUp">
      <div class="input-group">
        <input type="text" id="email" v-model="email" placeholder="Email" required>
      </div>
      <div class="input-group">
        <input type="password" id="password" v-model="password" placeholder="Password" required>
      </div>
      <div class="input-group">
        <input type="password verification" id="password verification" v-model="verifyPassword"
          placeholder="Re-enter Password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const verifyPassword = ref('')

    const login = () => {
      console.log('email: ', email.value);
      console.log('Password: ', password.value);
    }

    return { email, password, login };
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
