<template>
  <div>
    <header>
      <TitleBar />
    </header>
    <main>
      <div class="introduction">
        <h2>
          Full list can be found on my GitHub:&nbsp;
          <a href="https://github.com/ryanlacey20"> https://github.com/ryanlacey20</a>
        </h2>
      </div>
      <div class="cardContainer">
        <Card>
          <section>
            <h1>Spend Smart</h1>
            <h2><img src="../../Resources/dotnetLogo.png" /> .NET - C# - Bootstrap</h2>

            <p>
              A simple app using in-browser memory to create and edit costs.
              <br>Created from an introductory .NET lesson from
              <a href="https://academy.tutorials.eu/p/csharp-progress-academy"> tutorials.eu C# academy.</a>
            </p>
            <a class="exampleLink" href="https://spendsmart-d3eqafhmcybxftgt.uksouth-01.azurewebsites.net/"> View
              App Here</a>
          </section>
        </Card>
        <Card>
          <section>
            <h1>Adaptive Fan</h1>
            <h2><img src="../../Resources/arduinoLogo.png" /> C++ - Embedded Systems - Arduino</h2>

            <p>
              C++ software created for Arduino uno.
              <br>Temperature sensor which controls a fan based on the heat levels.
              <br>LCD connected to display the temperature in Celsius.
            </p>
            <a class="exampleLink" href="https://github.com/ryanlacey20/arduino-embedded-adaptive-fan-setup"> View
              Source Code
              Here</a>
          </section>
        </Card>
        <Card>
          <section>
            <h1>SafeWay - Personal Safety App</h1>
            <h2><img src="../../Resources/appleStoreLogo.jpeg" /> Mobile - iOS - Swift - Obj-C</h2>

            <p>
              iOS Personal Safety Application
              <br> Features:
              <br> - Panic buttons
              <br> - Location sharing
              <br> - Check-in features
              <br> - Connect with the profiles of close friends and family
            </p>
            <a class="exampleLink" href="https://github.com/ryanlacey20/SafeWay"> View Source Code Here</a>
          </section>
        </Card>
        <Card>
          <section>
            <h1>Resume Website</h1>
            <h2><img src="../../Resources/vueLogo.png" /> Vue.js - Axios - JavaScript </h2>

            <p>
              This resume website used showcase brief details about the author, Ryan Lacey. <br>
              Connects to API endpoints created by Ryan Lacey (myself) also. Back-end repo <a
                href="https://github.com/ryanlacey20/personal_project_backends">here</a> <br>
              Contact details hidden in environment variables behind a turing test in order to protect against web
              scrapers.
            </p>
            <a class="exampleLink" href="https://github.com/ryanlacey20/resume_website"> View Source Code Here</a>
          </section>
        </Card>
      </div>
    </main>
  </div>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
import Card from '../components/Cards/Card.vue';
export default {
  name: 'Examples',
  components: { TitleBar, Card },
  created() { }
}
</script>

<style lang="scss" scoped>
h1 {
  text-decoration: underline;
  text-align: center;
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.introduction {
  text-align: center;
  margin-bottom: 20px;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}

.cardContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 80%;
}

section {
  width: 100%;
  text-align: left;
}

.card {
  width: 100%;
  box-sizing: border-box;
}

.exampleLink {
  font-size: 1vw;
}

img {
  height: 1em;
  margin-right: 0.5em;
}
</style>
