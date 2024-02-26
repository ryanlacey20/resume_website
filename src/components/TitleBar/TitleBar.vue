<template>
  <div class="title-bar-container">
    <div class="title-bar-contents">
      <TitleBarButton buttonText="Home" routerLink="/" />
      <TitleBarButton buttonText="Education" routerLink="/Education" />
      <TitleBarButton buttonText="Experience" routerLink="/Experience" />
      <TitleBarButton buttonText="Contact" routerLink="/Contact" />
    </div>
    <TitleBarButton id="authButton" :font-size="fontSize" :isBold="false" buttonText="Login/Sign Up" routerLink="/Auth" />
    <div class="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TitleBarButton from './TitleBarButton.vue';

export default {
  name: 'TitleBar',
  components: {
    TitleBarButton
  },
  setup() {
    const name = ref('Ryan Lacey');
    const fontSize = '1.5vw';

    return {
      name,
      fontSize
    };
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
