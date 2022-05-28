<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>
        <Nuxt />
      </v-container>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    TheHeader: () => import('../components/TheHeader.vue'),
    TheFooter: () => import('../components/TheFooter.vue')
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
