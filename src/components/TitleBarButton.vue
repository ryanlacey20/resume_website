
<template>
  <div class = "ButtonContainer">
    <t>{{buttonText}}</t>
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

