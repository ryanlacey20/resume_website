
<template>
  <header>
    <TitleBar />
  </header>

  <body>
    <div class="cardContainer">
      <Login class="card" />
      <SignUp clas="card" />
    </div>
  </body>
</template>

<script>
import TitleBar from '@/components/TitleBar/TitleBar.vue';
import Login from '@/components/Auth/Login.vue'
import SignUp from '@/components/Auth/SignUp.vue'
export default {
  name: 'Auth',

  components: { TitleBar, Login, SignUp },

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
body {}

.cardContainer {
  display: flex;
  height: auto;
}

.card {
  width: 45%;
}
</style>

