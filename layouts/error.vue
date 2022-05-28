<template>
  <v-app dark>
    <div class="error_page">
      <h1 v-if="error.statusCode === 404">
        <h2>404</h2>
        <h3>Ошибка</h3>
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/"> Назад </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.error_page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10vw auto;
  width: 50vw;
  h2,
  h3,
  h4 {
    font-family: "Proxima Nova", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20vw;
    text-align: center;
    color: #b3b3b3;
  }
  h2 {
    line-height: 15vw;
  }
  h3 {
    font-size: 5vw;
  }
  h4 {
    font-size: 2vw;
    line-height: 3vw;
  }
}
@media (orientation: portrait) {
  .error_page {
    margin: 20vh auto;
    width: 80vw;
    h2,
    h3,
    h4 {
      font-family: "Proxima Nova", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 30vw;
      text-align: center;
      color: #b3b3b3;
    }
    h2 {
      line-height: 25vw;
    }
    h3 {
      margin-top: 3vw;
      font-size: 7vw;
    }
    h4 {
      margin-top: 3vw;
      font-size: 5vw;
      line-height: 6vw;
    }
  }
}
</style>
