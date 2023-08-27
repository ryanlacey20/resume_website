
<template>
  <div class = "ButtonContainer">
    <router-link :to="routerLink" class="link">{{buttonText}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'TitleBarButton',
  created() {

  },
  data() {
    return {
    }
  },
  props: 
   ['buttonText', 'routerLink'],


  methods: {
   
  },
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
    font-weight: bold;
    font-size: 4vw;
    text-decoration: none;
  }

  .link:visited {
    color: #2c3e50;
  }
</style>

