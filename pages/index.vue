<template>
  <div class="main">
    <div class="main_section">
      <NewsMain />
      <NewsAnother />
    </div>
    <NewsExclusive />
  </div>
</template>

<script>
export default {
  components: {
    NewsMain: () => import("../components/NewsMain.vue"),
    NewsAnother: () => import("../components/NewsAnother.vue"),
    NewsExclusive: () => import("../components/NewsExclusive.vue"),
  },
  methods: {
    getMe() {
      this.$axios.$get("/api/user/auth").then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.getMe();
  },
};
</script>


<style lang="scss" scoped>
.main {
  &_section {
    display: grid;
    margin-top: 40px;
    grid-template-columns: 71% 28%;
    grid-gap: 2%;
  }
}

@media all and (max-width: 768px) {
  .main {
    &_section {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>