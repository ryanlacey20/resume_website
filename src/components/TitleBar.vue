
<template>
  <div class="TitleBarContainer">
    <div class="TitleBarContents" id="Buttons">
      <TitleBarButton buttonText="Home" routerLink="/"/>
      <TitleBarButton buttonText="Education" routerLink="/Education"/>
      <TitleBarButton buttonText="Experience" routerLink="/"/>
      <TitleBarButton buttonText="Contact" routerLink="/"/>
    </div>

</div>
</template>

<script>

import TitleBarButton from './TitleBarButton.vue';

export default {
  name: 'title-bar',
  components:{
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
  // width: 100%;
  display: flex;
}

.TitleBarContents {
  display: flex;
  font-weight: bold;
  font-size: 50px;
}

#Buttons {
  justify-content: left;
}

#Name {
  justify-content: right;
}

</style>

