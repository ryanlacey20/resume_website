<template>
  <header>
    <TitleBar />
    <t class="TitleBarContents" id="Name">
      Ryan Lacey
    </t>
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
import TitleBar from './../components/title-bar.vue';
import HomeScreenBox from './../components/home-screen-box.vue';

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
TitleBar{
  width: 100%;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  height: 85vh; /* Set the height of the content container */
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally center the content */
}

#Name{
  justify-content: flex-end;
  font-size: 3vw;

}
.divContainingHomeScreenBox {
  
  width: 100%;
  height: 100%; /* This will take up 80% of the .content height */
}

/* Other styles for HomeScreenBox or its components go here */
</style>
