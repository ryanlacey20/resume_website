<template>
  <div class="container">
    <img class="box" id="leftBox" src="./../../Resources/headshotPlaceholder.png">

    <div class="box" id="rightBox">
      <div id="topLeft" class="tile">
        <img src="./../../Resources/infosys.png">
      </div>
      <div id="topRight" class="tile stacked">
        <img id="icon" src="./../../Resources/teamworkIcon.png">
        <img src="./../../Resources/teamworkLogo.svg.png">
      </div>
      <div id="bottomLeft" class="tile">
        <img id="uccLogo" src="./../../Resources/uccLogo.png">
      </div>
      <div id="bottomRightTile" class="tile"> <!-- Changed id to bottomRightTile -->
        <img id="safeWayLogo" src="./../../Resources/safeWay.png"> <!-- Changed id to safeWayLogo -->
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'HomeScreenBox',
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
.container {
  display: flex;
  height: 100%;
  width: 100%;
  // margin-left: 5%;
  
}

.box {
  width: 40%;
}

#rightBox {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
}

.tile {
  width: 50%;
  height: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.stacked {
  flex-direction: column; /* Stacking items vertically */
  justify-content: center; /* Centering vertically within the box */
  background-color: #D9D9D9;
}

img {
  max-width: 100%;
  height: auto;
}

#icon {
  height: 30%;
}

#bottomLeft {
  background-color: #D9D9D9;
}

#topRight {
  padding-bottom: 5%;
}

#uccLogo {
  width: auto; /* Adjust the width */
  height: 75%;
  margin: 0 auto; /* Center horizontally */
}

#leftBox{
  object-fit: contain;
}
</style>
