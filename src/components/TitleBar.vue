<template>
  <div class="TitleBarContainer">
    <div class="TitleBarContents" id="Buttons">
      <TitleBarButton buttonText="Home" routerLink="/" />
      <TitleBarButton buttonText="Education" routerLink="/Education" />
      <TitleBarButton buttonText="Experience" routerLink="/Experience" />
      <TitleBarButton buttonText="Contact" routerLink="/Contact" />

    </div>
    <div class="name" id="Name">
      Ryan Lacey
    </div>
  </div>
</template>

<script>
import TitleBarButton from './TitleBarButton.vue';

export default {
  name: 'title-bar',
  components: {
    TitleBarButton
  },
  created() {

  },
  data() {
    return {
    }
  },
  props: {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.TitleBarContainer {
  display: flex;
  justify-content: space-between;
  /* Positions items at each end */
  align-items: center;
  /* Aligns items vertically */
}

.TitleBarContents {
  display: flex;
  font-weight: bold;
  font-size: 50px;
}

.name {
  font-size: 3vw;
}
</style>
