<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>
        <Nuxt />
      </v-container>
      <TheFooter />
      <TheNotification />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("../components/TheHeader.vue"),
    TheFooter: () => import("../components/TheFooter.vue"),
    TheNotification: () => import("../components/TheNotification"),
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Главная",
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  overflow-x: hidden;
  padding: 0 13vw;
}
@media all and (max-width: 768px) {
  #app {
    width: 100vw;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0 auto;
  }
}
</style>
