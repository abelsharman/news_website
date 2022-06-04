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
    TheHeader: () => import('../components/TheHeader.vue'),
    TheFooter: () => import('../components/TheFooter.vue'),
    TheNotification: () => import('../components/TheNotification'),
  },
  data () {
    return {
    }
  },
  head(){
    return {
      title: 'Главная'
    }
  }
}
</script>

<style lang="scss">
#app{
  width: 100vw;
  padding: 0 13vw;
}
</style>
