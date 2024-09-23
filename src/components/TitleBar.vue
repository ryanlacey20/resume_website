<template>
  <div class="title-bar-container">
    <div class="title-bar-contents">
      <TitleBarButton buttonText="Home" routerLink="/" />
      <TitleBarButton buttonText="Education" routerLink="/Education" />
      <TitleBarButton buttonText="Experience" routerLink="/Experience" />
      <TitleBarButton buttonText="Contact" routerLink="/Contact" />
      <TitleBarButton buttonText="Work Examples" routerLink="/Examples" />
    </div>
    <div class="name">
      Ryan Lacey
    </div>
  </div>
</template>

<script>
import TitleBarButton from './TitleBarButton.vue';

export default {
  name: 'TitleBar',
  components: {
    TitleBarButton
  },
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
  font-size: 24px;
}
</style>
