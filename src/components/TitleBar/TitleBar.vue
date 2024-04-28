<template>
  <div class="title-bar-container">
    <div class="title-bar-contents">
      <TitleBarButton buttonText="Home" routerLink="/" />
      <TitleBarButton buttonText="Education" routerLink="/Education" />
      <TitleBarButton buttonText="Experience" routerLink="/Experience" />
      <TitleBarButton buttonText="Contact" routerLink="/Contact" />
    </div>
    <TitleBarButton v-if="isUserAuthenticatedVar.value" id="authButton" :font-size="fontSize" :isBold="false"
      buttonText="Login/Sign Up" routerLink="/Auth" />
    <TitleBarButton v-if="!isUserAuthenticatedVar.value" id="authButton" :font-size="fontSize" :isBold="false"
      :buttonText="uid.value" routerLink="/Profile" />
    <div class="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import TitleBarButton from './TitleBarButton.vue';
import { getAuth } from 'firebase/auth';

export default {
  name: 'TitleBar',
  components: {
    TitleBarButton
  },
  setup() {
    const name = ref('Ryan Lacey');
    const fontSize = '1.5vw';
    const isUserAuthenticatedVar = ref(false);
    const auth = getAuth();
    const uid = ref("1234")

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // uid.value = user.uid;
        console.log("uid is:", uid.value)
        isUserAuthenticatedVar.value = true


        console.log("is user authenticated:", isUserAuthenticatedVar.value,
          "\nauthentication obj:", auth)
      } else {
        // User is signed out
        // ...
      }
    });


    return { name, fontSize, isUserAuthenticatedVar, uid };
  }
}
</script>

<style scoped>
.title-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.title-bar-contents {
  display: flex;
  font-weight: bold;
}

.name {
  font-size: 1.75vw;
}

#authButton {
  padding-left: 5vw;
}
</style>
