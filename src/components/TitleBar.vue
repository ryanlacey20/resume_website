
<template>
  <div class="TitleBarContainer">
    <div class="TitleBarContents" id="Buttons">
      <TitleBarButton buttonText="Home" />
      <TitleBarButton buttonText="Education" />
      <TitleBarButton buttonText="Experience" />
      <TitleBarButton buttonText="Contact" />
    </div>

</div>
</template>

<script>

import TitleBarButton from './TitleBarButton.vue';

export default {
  name: 'TitleBar',
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

