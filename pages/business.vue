<template>
  <div class="world">
    <h2>Новости Бизнеса</h2>
    <div v-for="item in articles" :key="item.id" style="margin-bottom: 40px">
      <img :src="`https://kapibackend.abelsharman.kz/${item.img}`" alt="" />
      <span class="world_tag"> #{{ item.tag }} </span>
      <h1 v-text="item.title" @click="goPage(item.id)"></h1>
      <p>{{ item.subtitle }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      articles: [],
      date: [],
    };
  },
  methods: {
    getArticles() {
      this.$axios.$get("/api/news/business").then((res) => {
        console.log(res);
        this.articles = res;
        console.log(this.articles, "MIR");
      });
    },
    goPage(id) {
      this.$router.push(`/News/${id}`);
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.world {
  margin-top: 40px;
  h2 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #333333;
  }
  img {
    width: 100%;
    margin: 22px 0 12px 0;
  }
  &_tag {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-right: 8px;
    color: #ef3124;
  }
  h1 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    color: #181818;
    margin: 8px 0;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #333333;
  }
}

@media all and (max-width: 768px) {
  .world {
    margin-bottom: 60px;
    h2 {
      font-size: 16px;
    }
    img {
      width: 100%;
      margin: 10px 0 5px 0;
    }
    &_tag {
      font-size: 10px;
    }
    h1 {
      font-size: 24px;
      line-height: 24px;
      margin: 4px 0;
    }
    p {
      font-size: 8px;
      line-height: 16px;
      color: #333333;
    }
  }
}
</style>