
<template>
  <div class = "ButtonContainer">
    <router-link to="/about">{{buttonText}}</router-link>
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
   ['buttonText'],

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

  t {
    font-weight: bold;
    font-size: 4vw;}
</style>

