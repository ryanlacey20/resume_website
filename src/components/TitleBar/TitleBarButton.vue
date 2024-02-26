<template>
  <div class="ButtonContainer">
    <router-link :to="routerLink" :class="{ link: true, 'bold-text': isBold }" :style="{ fontSize: fontSize }">{{
      buttonText
    }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'TitleBarButton',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    routerLink: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: '3.5vw'
    },
    isBold: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ButtonContainer {
  margin-right: 2%;
  display: flex;
  align-items: center;
}

.link {
  color: #2c3e50;
  text-decoration: none;
}

.bold-text {
  font-weight: bold;
}

.link:visited {
  color: #2c3e50;
}
</style>
