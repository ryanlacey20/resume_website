<template>
  <header>
    <TitleBar />
    <!-- <t class="TitleBarContents" id="Name">
      Ryan Lacey
    </t> -->
  </header>

  <div class="content">
    <div class="divContainingHomeScreenBox">
      <HomeScreenBox />
    </div>

    <div>
      <!-- Other content here -->
    </div>
  </div>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
import HomeScreenBox from './../components/HomeScreenBox.vue';

export default {
  name: 'App',
  components: {
    TitleBar,
    HomeScreenBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

TitleBar {
  width: 100%;
}

/* header{
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
.content {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* #Name{
  justify-content: flex-end;
  font-size: 3vw;

} */
.divContainingHomeScreenBox {

  width: 100%;
  height: 100%;
}
</style>
