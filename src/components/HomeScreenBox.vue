<template>
  <div class="container">
    <div class="box" id="leftBox">
      <img src="./../../Resources/gradPhoto.jpeg" alt="Graduation Photo">
    </div>

    <div class="box" id="rightBox">
      <a href="https://www.infosysbpm.com/" class="tile">
        <div class="card">
          <img src="./../../Resources/infosys.png" alt="Infosys Logo">
        </div>
      </a>
      <a href="https://www.teamwork.com/" class="tile">
        <div class="card">
          <!-- <img src="./../../Resources/teamworkIcon.png" alt="Teamwork Icon"> -->
          <img src="./../../Resources/teamworkLogo.svg.png" alt="Teamwork Logo">
        </div>
      </a>
      <a href="https://www.ucc.ie/en/ck401/" class="tile">
        <div class="card">
          <img src="./../../Resources/uccLogo.png" alt="UCC Logo">
        </div>
      </a>
      <a href="https://github.com/ryanlacey20/SafeWay/blob/main/Report%20on%20SafeWay-%20A%20Personal%20Safety%20App.pdf"
        class="tile">
        <div class="card">
          <img src="./../../Resources/safeWay.png" alt="SafeWay Logo">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeScreenBox',
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}

.box {
  width: 40%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 10px;
}

.card {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

img {
  max-width: 100%;
  height: auto;
}
</style>
