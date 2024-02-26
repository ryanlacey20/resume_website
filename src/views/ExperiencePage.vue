
<template>
  <header>
    <TitleBar />
    <!-- <t class="TitleBarContents" id="Name">
      Ryan Lacey
    </t> -->
  </header>
  <main>
    <img src="../../Resources/siteUnderConstruction.jpg" />
    <a href="http://www.freepik.com">Designed by studiogstock / Freepik</a>
  </main>
</template>

<script>
import TitleBar from '@/components/TitleBar/TitleBar.vue';
export default {
  name: 'ExperiencePage',
  components: { TitleBar },
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
main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

img {
  margin-top: 10%;
  width: 20%;

}
</style>

