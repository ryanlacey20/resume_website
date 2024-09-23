<template>
  <div>
    <header>
      <TitleBar />
    </header>
    <main>
      <h1>Spend Smart</h1>
      <h2>.NET - C# - Bootstrap</h2>
      <section>
        <p>
          A simple app using in-browser memory to create and edit costs. Created from an introductory .NET lesson from
          <a href="https://academy.tutorials.eu/p/csharp-progress-academy"> tutorials.eu C# academy.</a>
        </p>
        <a class="exampleLink" href="https://spendsmart-d3eqafhmcybxftgt.uksouth-01.azurewebsites.net/"> View Here</a>
      </section>
    </main>
  </div>
</template>

<script>
import TitleBar from './../components/TitleBar.vue';
export default {
  name: 'Examples',
  components: { TitleBar },
  created() {

  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-decoration: underline;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  width: 50%;
  text-align: left;
}

.exampleLink {
  font-size: 1vw;
}
</style>
